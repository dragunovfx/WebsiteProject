import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  IconButton,
  Tooltip,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import InfoIcon from '@mui/icons-material/Info';
import { fetchEconomicCalendar, EconomicEvent } from '../services/economicCalendarService';
import { format, subDays, addDays } from 'date-fns';

// Styled components
const ImpactChip = styled(Chip)(({ impact }: { impact: string }) => ({
  backgroundColor:
    impact === 'High'
      ? '#ff4d4d'
      : impact === 'Medium'
      ? '#ffa64d'
      : '#4dff4d',
  color: 'white',
  fontWeight: 'bold',
}));

const currencies = ['ALL', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'NZD'];
const impacts = ['ALL', 'High', 'Medium', 'Low'];

const EconomicCalendar: React.FC = () => {
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState('ALL');
  const [selectedImpact, setSelectedImpact] = useState('ALL');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 7));
  const [selectedEvent, setSelectedEvent] = useState<EconomicEvent | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchEconomicCalendar(
        format(startDate, 'yyyy-MM-dd'),
        format(endDate, 'yyyy-MM-dd'),
        selectedCurrency !== 'ALL' ? [selectedCurrency] : undefined
      );
      setEvents(data);
    } catch (err) {
      setError('Failed to fetch economic calendar data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [startDate, endDate, selectedCurrency]);

  const filteredEvents = events.filter((event) => {
    const impactMatch = selectedImpact === 'ALL' || event.impact === selectedImpact;
    return impactMatch;
  });

  const handleEventClick = (event: EconomicEvent) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Economic Calendar
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              value={selectedCurrency}
              label="Currency"
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Impact</InputLabel>
            <Select
              value={selectedImpact}
              label="Impact"
              onChange={(e) => setSelectedImpact(e.target.value)}
            >
              {impacts.map((impact) => (
                <MenuItem key={impact} value={impact}>
                  {impact}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => newValue && setStartDate(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => newValue && setEndDate(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Impact</TableCell>
                <TableCell>Actual</TableCell>
                <TableCell>Forecast</TableCell>
                <TableCell>Previous</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.currency}</TableCell>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>
                    <ImpactChip label={event.impact} impact={event.impact} />
                  </TableCell>
                  <TableCell>{event.actual || '-'}</TableCell>
                  <TableCell>{event.forecast || '-'}</TableCell>
                  <TableCell>{event.previous || '-'}</TableCell>
                  <TableCell>
                    <Tooltip title="View Details">
                      <IconButton onClick={() => handleEventClick(event)}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle>{selectedEvent.event}</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Description</Typography>
                  <Typography>{selectedEvent.description || 'No description available'}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Country</Typography>
                  <Typography>{selectedEvent.country}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Impact</Typography>
                  <ImpactChip label={selectedEvent.impact} impact={selectedEvent.impact} />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Actual</Typography>
                  <Typography>{selectedEvent.actual || '-'}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Forecast</Typography>
                  <Typography>{selectedEvent.forecast || '-'}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Previous</Typography>
                  <Typography>{selectedEvent.previous || '-'}</Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default EconomicCalendar; 