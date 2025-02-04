import DurationToggle from "./DurationToggle"
import StockDropdown from "./StockDropdown"
import StockGraph from "./StockGraph"

function StockGraphComponent() {
  return (
    <div className="min-h-[50vh] bg-[#0A0A0A] text-[#E5E5E5]">
      <h2 className="text-4xl sm:text-6xl font-bold text-center pt-8">Live Stock Graph</h2>
      <div className="flex flex-col justify-center items-center max-w-[92vw] sm:max-w-[100vw] mx-auto">
        <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-4 mt-12">
        <StockDropdown />
        <DurationToggle />
        </div>
        <StockGraph />
      </div>
    </div>
  )
}

export default StockGraphComponent