export interface Stock {
    id: string; // Unique identifier for the stock
    name: string; // Stock name (e.g., "Apple", "Google")
  }
  
  export interface StockGraphData {
    timestamp: string; // Time of the data point (e.g., "2025-02-01 10:00")
    value: number; // Stock value at that timestamp
  }
  