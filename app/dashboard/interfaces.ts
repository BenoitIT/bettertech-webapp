export interface MonthlyInsight {
  status: number;
  activitiesDone: number;
  activityDonePercent: number;
  cashMade: number;
  cashRecievedPercent: number;
  cashReceived: number;
  unpaidCash: number;
  unpaidCashPercent: number;
}

export interface PaymentInfo {
  month: string;
  debit: number;
  received: number;
}

export interface TransactionInfo {
  month: string;
  transactions: number;
  clients: number;
}

export interface Message{
    month: string,
    value: number,
}