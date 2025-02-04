import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { fetchStockGraphData } from '../stocks/stocksThunk';
import { RootState } from '../store';

const useFetchData = (stockId: string | null, duration: string) => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.stocks);

  useEffect(() => {
    if (!stockId || !duration || loading) return;

    // Fetch data immediately when duration changes
    dispatch(fetchStockGraphData(stockId, duration));
  }, [dispatch, stockId, duration]);
};

export default useFetchData;
