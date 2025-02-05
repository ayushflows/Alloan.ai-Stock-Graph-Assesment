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
  if (!Array.isArray(graphData) || graphData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 flex items-center">
          Loading the Graph Data
          <span className="dot-animate">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    );
  }
  

  const maxDataPoints = window.innerWidth < 768 ? 50 : 100;
  let displayData = graphData;

  if (graphData.length > maxDataPoints) {
    const step = Math.floor(graphData.length / maxDataPoints);
    
    displayData = graphData.filter((_, index) => index % step === 0);
  }

  const data = {
    labels: displayData.map((item) => item.timestamp),
    datasets: [
      {
        label: `${selectedStock.name} (${duration})`,
        data: displayData.map((item) => item.price),
        borderColor: "rgb(254, 169, 0)",
        backgroundColor: "rgba(244, 200, 131, 0.32)",
        pointRadius: window.innerWidth < 568 ? 2 : window.innerWidth < 768 ? 3 : 6,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          minRotation: 45,
          maxTicksLimit: window.innerWidth < 768 ? 6 : 12, color: '#D3D3D3'
        },
        title: { display: true, text: "Time", color: '#D3D3D3' },
      },
      y: { ticks:{ color: '#D3D3D3' }, title: { display: true, text: "Price", color: '#D3D3D3' } },
    },
  };

  return (
    <>
      <p className="text-xl sm:text-2xl mt-10 text-center">
        Graph for {selectedStock.name} within {duration} :
      </p>
      <div className="w-full h-[400px] sm:h-[550px] md:h-[650px] sm:max-w-[90vw] sm:p-4 mt-[10px] mb-18">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default StockGraph;
