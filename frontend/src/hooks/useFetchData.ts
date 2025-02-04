import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { fetchStockGraphData } from '../stocks/stocksThunk';
import { RootState } from '../store';

const useFetchData = (stockId: string | null, duration: string) => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.stocks);

  useEffect(() => {
    if (!stockId) return;

    const interval = setInterval(() => {
      if (!loading) {
        dispatch(fetchStockGraphData(stockId, duration));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch, stockId, duration, loading]);
};

export default useFetchData;
