export interface Stock {
    id: string; // Unique identifier for the stock
    name: string; // Stock name (e.g., "Apple", "Google")
    available: string[];
  }
  
  export interface StockGraphData {
    change: number;
    change_percent: number;
    price: number;
    volume: number,
    timestamp: string;
  }
  