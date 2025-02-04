import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { setSelectedStock } from "../stocks/stocksSlice";
import { fetchStocks } from "../stocks/stocksThunk";


const StockDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const { stocks, selectedStock } = useSelector(
    (state: RootState) => state.stocks
  );

  const handleChange = (selectedOption: any) => {
    dispatch(setSelectedStock(selectedOption?.value || null));
  };

  const options = stocks.map((stock) => ({
    value: stock.id,
    label: stock.name,
  }));

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <Select
        options={options}
        value={options.find((opt) => opt.value === selectedStock) || null}
        onChange={handleChange}
        placeholder="Select a stock"
        className="text-black"
      />
    </div>
  );
};

export default StockDropdown;
