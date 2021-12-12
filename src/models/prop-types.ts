import { CoinPrice } from './coin-price';
import { Order } from './order';
import { Wallet } from './wallet';

export type BreakEvenPriceProps = {
    bep: number;
    currentPrice: number;
    countUpDuration: number;
};

export type CoinTraderProps = {
    orders: Order[];
    initialPrices: CoinPrice[];
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
    wallet: Wallet;
    setWallet: React.Dispatch<React.SetStateAction<Wallet>>;
};

export type HeaderDetailProps = { currentPrice: number; PL: number; realizedPL: number };

export type OrderListProps = { orders: Order[]; name: string };

export type PriceChartProps = { prices: CoinPrice[]; bep: number };
