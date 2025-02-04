import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// Custom hook to use the correct dispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>();
