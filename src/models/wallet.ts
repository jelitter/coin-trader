export type Wallet = {
    cash: number;
    coins: number;
};

export const BASE_COIN_PRICE = 100;
export const INITIAL_WALLET: Wallet = { cash: 2_000, coins: 0 };
