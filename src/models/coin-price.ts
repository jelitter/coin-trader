import { v4 as uuidv4 } from 'uuid';
import { BASE_COIN_PRICE } from './wallet';

export type CoinPrice = {
    id: string;
    timeStamp: string;
    price: number;
};

export const PRICES_LENGTH = 240;

// Up to 3% positive or negative noise
export const getNoise = (value: number): number => Math.random() * value * 0.03 * (Math.random() > 0.5 ? 1 : -1);

//    const price: number = +(BASE_COIN_PRICE + getNoise(BASE_COIN_PRICE)).toFixed(2);

/**
 * Generate a list of random coin prices
 */
export const getCoinPrices = (numberOfPrices: number): CoinPrice[] => {
    const coinPrices: CoinPrice[] = [];
    const now = new Date();
    const startTime = new Date(now.getTime() - numberOfPrices * 1000);

    for (let i = 0; i < numberOfPrices; i++) {
        const timeStamp = new Date(startTime.getTime() + i * 1000).toISOString().substring(11, 19);
        const price = i === 0 ? BASE_COIN_PRICE : coinPrices[i - 1].price + getNoise(coinPrices[i - 1].price);
        coinPrices.push({
            id: uuidv4(),
            timeStamp,
            price: +price.toFixed(2),
        });
    }

    return coinPrices;
};
