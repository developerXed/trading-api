export interface CryptoPrice {
        value?:string;
        price?:number
}

export enum TokenValue {
    XRP ="XRP",
    BTC ="BTC",
    ETC ="ETC"
  }
  

  export interface Token {
    timestamp?:string;
    transaction_type?:string;
    token?:string;
    amount?: string | number;
}

export enum TransactionType  {
    WITHDRAWAL = "WITHDRAWAL",
    DEPOSIT = "DEPOSIT"
}