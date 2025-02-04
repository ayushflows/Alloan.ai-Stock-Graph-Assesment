import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "chart.js/auto";

const StockGraph: React.FC = () => {
  const { graphData, selectedStock, duration } = useSelector(
    (state: RootState) => state.stocks
  );

  if (!selectedStock) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Please select a stock to view the graph.</p>
      </div>
    );
  }

  const data = {
    labels: graphData.map((point) => point.timestamp),
    datasets: [
      {
        label: `${selectedStock} (${duration})`,
        data: graphData.map((point) => point.value),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: { title: { display: true, text: "Value" } },
    },
  };

  return (
    <div className="w-full h-96 p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockGraph;
