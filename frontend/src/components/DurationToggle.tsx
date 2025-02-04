import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDuration } from "../stocks/stocksSlice";
import { RootState } from "../store";

const durations = ["1D", "1W", "1M"];

const DurationToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { duration } = useSelector((state: RootState) => state.stocks);

  const handleClick = (selectedDuration: string) => {
    dispatch(setDuration(selectedDuration));
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      {durations.map((dur) => (
        <button
          key={dur}
          onClick={() => handleClick(dur)}
          className={`px-4 py-2 rounded-lg border ${
            duration === dur
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-blue-200"
          }`}
        >
          {dur}
        </button>
      ))}
    </div>
  );
};

export default DurationToggle;
