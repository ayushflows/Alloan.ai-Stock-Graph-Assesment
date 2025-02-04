import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stock, StockGraphData } from './types';

interface StockState {
  stocks: Stock[];
  selectedStock: string | null;
  duration: string;
  graphData: StockGraphData[];
  loading: boolean;
}

const initialState: StockState = {
  stocks: [],
  selectedStock: null,
  duration: '1D',
  graphData: [],
  loading: false,
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks: (state, action: PayloadAction<Stock[]>) => {
      state.stocks = action.payload;
    },
    setSelectedStock: (state, action: PayloadAction<string>) => {
      state.selectedStock = action.payload;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    setGraphData: (state, action: PayloadAction<StockGraphData[]>) => {
      state.graphData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setStocks,
  setSelectedStock,
  setDuration,
  setGraphData,
  setLoading,
} = stockSlice.actions;

export default stockSlice.reducer;
