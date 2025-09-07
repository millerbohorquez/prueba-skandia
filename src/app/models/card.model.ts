export interface CardItem {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;   
  detaildProduct: string;
}

export interface ApiResponse {
  listCard: CardItem[];
}