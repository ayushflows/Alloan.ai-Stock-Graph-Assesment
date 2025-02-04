import DurationToggle from "./DurationToggle"
import StockDropdown from "./stockDropDown"
import StockGraph from "./StockGraph"

function StockGraphComponent() {
  return (
    <div className="min-h-[50vh] bg-[#0A0A0A] text-[#E5E5E5]">
      <h2 className="text-4xl font-bold text-center pt-8">Live Stock Graph</h2>
      <div className="flex justify-center items-center h-full">
        <div className="w-[90%] h-[70%] bg-[#1A1A1A] rounded-lg">
            
        <StockDropdown />
      <DurationToggle />
      <StockGraph />
        </div>
      </div>
    </div>
  )
}

export default StockGraphComponent