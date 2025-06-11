import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarketBreakdown from './pages/MarketBreakdown';
import TradingStrategies from './pages/TradingStrategies';
import MarketAnalysis from './pages/MarketAnalysis';
import About from './pages/About';
import EconomicCalendar from './pages/EconomicCalendar';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-breakdown" element={<MarketBreakdown />} />
          <Route path="/trading-strategies" element={<TradingStrategies />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/economic-calendar" element={<EconomicCalendar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
