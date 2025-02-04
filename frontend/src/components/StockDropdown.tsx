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
    const selectedStock = stocks.find(stock => stock.id === selectedOption?.value) || null;
    if (selectedStock) {
      dispatch(setSelectedStock(selectedStock));
    }
  };

  const options = stocks.map((stock) => ({
    value: stock.id,
    label: stock.name,
  }));

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <>
    <div className="w-full max-w-sm ">
      <label className="block text-xl text-center font-medium text-gray-200 pb-3">
        Select Stock </label>
      <Select
        options={options}
        value={options.find((opt) => opt.value === selectedStock?.id) || null}
        onChange={handleChange}
        placeholder="Select a stock"
        className="text-black"
      />
    </div>
    </>
  );
};

export default StockDropdown;
