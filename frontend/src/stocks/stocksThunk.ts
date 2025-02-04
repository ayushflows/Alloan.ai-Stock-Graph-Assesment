import { AppDispatch } from '../store';
import axios from 'axios';
import { setStocks, setGraphData, setLoading } from './stocksSlice';

export const fetchStocks = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('http://localhost:3000/api/stocks');
    console.log("got the data", response.data)
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
      const response = await axios.post(`http://localhost:3000/api/stocks/${stockId}`, {
        duration,
      });
      console.log("got the graph data", response.data)
      dispatch(setGraphData(response.data));
    } catch (error) {
      console.error('Failed to fetch stock graph data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
