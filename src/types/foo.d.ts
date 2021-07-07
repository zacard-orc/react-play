declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'foo' {
  export const bar: number;
}

type ActionPayloadCount = {
  count: number;
  msg?: string;
};

interface Action<T> {
  type: string;
  payload: T;
}

type FlowOrderBook = Array<{
  direction: string;
  price: number;
  amount: number;
}>;

type FlowSymbolMarkets = Array<{
  symbol: string;
  price: number;
  pct: string;
}>;

type FlowKlines = Array<{
  id: number;
  high: number;
  low: number;
  open: number;
  close: number;
  count: number;
  amount: number;
  vol: number;
}>;
