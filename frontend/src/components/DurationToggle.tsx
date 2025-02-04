import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDuration } from "../stocks/stocksSlice";
import { RootState } from "../store";
import useFetchData from "../hooks/useFetchData";

const DurationToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { duration, selectedStock } = useSelector((state: RootState) => state.stocks);

  useFetchData(selectedStock?.id ?? null, duration);
  // if (!selectedStock) return null;

  const handleClick = (selectedDuration: string) => {
    dispatch(setDuration(selectedDuration));
  };
console.log("selectedStock", selectedStock)

  return (
<div className="flex justify-center flex-wrap gap-4 my-4">
  {selectedStock !== null && selectedStock.available.length > 0 ? (
    <div className="items-center text-center">
      <p className="text-gray-100 pb-2">{duration ? "You have selected a duration" : "Select any Duration"}</p>

    {selectedStock.available.map((dur) => (
      <button
        key={dur}
        onClick={() => handleClick(dur)}
        className={`px-4 py-2 mx-2 rounded-lg border transition ${
          duration === dur
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 hover:bg-blue-200"
        }`}
      >
        {dur}
      </button>
    ))}
    </div>
  ) : (
    <div className="items-center text-center">
      <p className="text-gray-400 pb-2">Select Stock from dropdown to get duration</p>
      {["1D", "1M", "1Y"].map((dur) => (
        <button
          key={dur}
          onClick={() => handleClick(dur)}
          className={`px-4 py-2 mx-2 rounded-lg border transition bg-white text-gray-700 opacity-[0.6]`}
        >
          {dur}
        </button>
      ))}
    </div>
  )}
</div>


  );
};

export default DurationToggle;
