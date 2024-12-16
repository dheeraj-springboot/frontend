
export interface ApiRequest {
    code: string; // Represents the product code sent to the API
  }
  
  export interface ApiResponse {
    code: string; // The product code returned by the API
    result: number; // The number of other options returned by the Flask API
  }
  export interface DeliveryRequest {
    asin: string;
    pincodes: string[];
  }
  
  export interface DeliveryResult {
    pincode: string;
    delivery_days?: number;
    error?: string;
  }
  
  export interface DeliveryResponse {
    asin: string;
    results: DeliveryResult[];
  }