import axios from 'axios';

const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export interface EconomicEvent {
  id: string;
  date: string;
  time: string;
  currency: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  actual: string | null;
  forecast: string | null;
  previous: string | null;
  country: string;
  description?: string;
}

export const fetchEconomicCalendar = async (
  startDate: string,
  endDate: string,
  currencies?: string[]
): Promise<EconomicEvent[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'ECONOMIC_CALENDAR',
        apikey: API_KEY,
        start_date: startDate,
        end_date: endDate,
        currencies: currencies?.join(','),
      },
    });

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data.map((event: any) => ({
      id: event.id,
      date: event.date,
      time: event.time,
      currency: event.currency,
      event: event.event,
      impact: event.impact,
      actual: event.actual,
      forecast: event.forecast,
      previous: event.previous,
      country: event.country,
      description: event.description,
    }));
  } catch (error) {
    console.error('Error fetching economic calendar:', error);
    throw error;
  }
}; 