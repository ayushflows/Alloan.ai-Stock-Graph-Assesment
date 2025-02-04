import { AppDispatch } from '../store';
import axios from 'axios';
import { setStocks, setGraphData, setLoading } from './stocksSlice';

export const fetchStocks = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://alloan-ai-stock-graph-assesment.onrender.com/api/stocks');
    dispatch(setStocks(response.data));
  } catch (error) {
    console.error('Failed to fetch stocks:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchStockGraphData =
  (stockId: string, duration: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(`https://alloan-ai-stock-graph-assesment.onrender.com/api/stocks/${stockId}`, {
        duration,
      });
      dispatch(setGraphData(response.data.data));
    } catch (error) {
      console.error('Failed to fetch stock graph data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
