import { AppDispatch } from '../store';
import axios from 'axios';
import { setStocks, setGraphData, setLoading } from './stocksSlice';

export const fetchStocks = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URI+'api/stocks');
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
    dispatch(setGraphData([]));
    let completeData: any[] = [];
    let status = 'STARTING';

    while (status !== 'COMPLETE') {
      try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URI+`api/stocks/${stockId}`, {
          duration,
        });
        const { data, status: newStatus } = response.data;
        completeData = [...completeData, ...data];
        status = newStatus;

        dispatch(setGraphData(completeData));
        if (status !== 'COMPLETE') {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        console.error('Failed to fetch stock graph data:', error);
        break;
      }
    }

    dispatch(setLoading(false));
  };
