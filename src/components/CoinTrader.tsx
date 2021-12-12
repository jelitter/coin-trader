import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { BiCoin } from 'react-icons/bi';
import { BsCashCoin, BsCashStack } from 'react-icons/bs';
import { SiCoinbase } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';
import { CoinPrice, getNoise, PRICES_LENGTH } from '../models/coin-price';
import { Order, OrderType } from '../models/order';
import { Wallet } from '../models/wallet';
import HeaderDetail from './HeaderDetail';
import { OrderList } from './OrderList';
import PricesChart from './PricesChart';
import './style/CoinTrader.scss';

const PRICE_RATE = 1000; // milliseconds
const countUpDuration = 0.5; // seconds

const Orders = ({
    orders,
    initialPrices,
    setOrders,
    wallet,
    setWallet,
}: {
    orders: Order[];
    initialPrices: CoinPrice[];
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
    wallet: Wallet;
    setWallet: React.Dispatch<React.SetStateAction<Wallet>>;
}) => {
    const [prices, setPrices] = useState<CoinPrice[]>(initialPrices);
    const [currentPrice, setCurrentPrice] = useState<number>(prices[prices.length - 1].price);
    const [bep, setBep] = useState<number>(wallet.coins > 0 ? wallet.coins * currentPrice : null);
    const [bepStart, setBepStart] = useState<Date>(new Date());
    const [PL, setPL] = useState<number>(0);
    const [realizedPL, setRealizedPL] = useState<number>(0);

    const pricesJson = JSON.stringify(prices);

    useEffect(() => {
        const timer = setInterval(() => {
            const price: number = +(currentPrice + getNoise(currentPrice)).toFixed(2);
            setCurrentPrice(price);

            if (prices.length > PRICES_LENGTH) {
                prices.shift();
            }
            setPrices([...prices, { id: uuidv4(), timeStamp: new Date().toISOString().substring(11, 19), price }]);
            setPL(wallet.coins * price - wallet.coins * bep);
        }, PRICE_RATE);
        return () => clearInterval(timer);
    }, [bep, currentPrice, prices, pricesJson, wallet.coins]);

    const buy = () => {
        const latestOrder: Order = orders[orders.length - 1];
        const order: Order = {
            id: uuidv4(),
            date: new Date(),
            orderNumber: (latestOrder?.orderNumber ?? 0) + 1,
            type: OrderType.Buy,
            price: currentPrice,
        };

        setOrders([...orders, order]);
        setWallet({ cash: wallet.cash - order.price, coins: wallet.coins + 1 });

        const buyOrders = [...orders, order]
            .filter(o => o.type === OrderType.Buy && o.date.getTime() > bepStart.getTime())
            .map(o => o.price);
        const bep = buyOrders.reduce((a, b) => a + b, 0) / buyOrders.length ?? 0;

        setBep(+bep.toFixed(2));
    };

    const sell = () => {
        const latestOrder: Order = orders[orders.length - 1];
        const order: Order = {
            id: uuidv4(),
            date: new Date(),
            orderNumber: (latestOrder?.orderNumber ?? 0) + 1,
            type: OrderType.Sell,
            price: currentPrice,
        };

        setOrders([...orders, order]);
        setWallet({ cash: wallet.cash + order.price, coins: wallet.coins - 1 });

        setRealizedPL(realizedPL + (order.price - bep));

        if (wallet.coins === 1) {
            setBep(null);
            setBepStart(order.date);
        }
    };

    return (
        <div className='orders'>
            <div className='logo'>
                <SiCoinbase
                    style={{
                        height: '6rem',
                        width: '50%',
                        marginLeft: '-70px',
                    }}
                />
                <HeaderDetail currentPrice={currentPrice} PL={PL} realizedPL={realizedPL} />
            </div>
            <div className='header'>
                <div className='title'>
                    <BsCashCoin style={{ height: '2rem', color: 'cornflowerblue', verticalAlign: 'middle' }} />
                    <div>
                        <div style={{ fontSize: '0.75rem', textAlign: 'left', opacity: '0.75' }}>Wallet</div>
                        <CountUp
                            decimals={2}
                            duration={countUpDuration}
                            end={wallet.coins * currentPrice + wallet.cash}
                            prefix='$'
                            preserveValue={true}
                            useEasing={true}
                        />
                    </div>
                </div>
                <div className='coins' title='Coins'>
                    <BiCoin style={{ height: '2rem', color: 'gold', verticalAlign: 'middle' }} />
                    <div>
                        <div style={{ fontSize: '0.75rem', textAlign: 'left', opacity: '0.75' }}>{wallet.coins} coins</div>
                        <CountUp
                            decimals={2}
                            duration={countUpDuration}
                            end={wallet.coins * currentPrice}
                            prefix='$'
                            preserveValue={true}
                            useEasing={true}
                        />
                    </div>
                </div>

                <div className='cash' title='Cash'>
                    <BsCashStack style={{ height: '2rem', color: '#43a334', verticalAlign: 'middle' }} />
                    <div>
                        <div style={{ fontSize: '0.75rem', textAlign: 'left', opacity: '0.75' }}>Cash</div>
                        <CountUp
                            decimals={2}
                            duration={countUpDuration}
                            end={wallet.cash}
                            prefix='$'
                            preserveValue={true}
                            useEasing={true}
                        />
                    </div>
                </div>
            </div>
            <div className='actions'>
                <button className='buy' disabled={wallet.cash <= currentPrice} onClick={() => buy()}>
                    Buy
                </button>
                <button className='sell' disabled={wallet.coins <= 0} onClick={() => sell()}>
                    Sell
                </button>
            </div>

            <PricesChart prices={prices} bep={bep} />

            <div className='sales'>
                <OrderList orders={orders.filter((order: Order) => order.type === OrderType.Sell)} name='Sales' />
            </div>
            <div className='purchases'>
                <div
                    title='Break Even Price'
                    style={{ position: 'absolute', top: '1rem', color: '#eee', textShadow: 'rgb(0 0 0) 2px 2px 1px' }}>
                    <div>B.E.P.</div>
                    {/* <div style={{ fontSize: '1.25rem' }}>{bep ? `$${bep.toFixed(2)}` : <>&mdash;</>}</div> */}
                    <div style={{ fontSize: '1.25rem' }}>
                        {bep ? (
                            <CountUp preserveValue={true} end={bep} decimals={2} duration={countUpDuration} useEasing={true} prefix='$' />
                        ) : (
                            <>&mdash;</>
                        )}
                    </div>

                    {bep && (
                        <div style={{ fontSize: '0.8rem', color: currentPrice - bep >= 0 ? '#43a334' : '#ec5e33' }}>
                            {bep > 0 ? (
                                <CountUp
                                    decimals={2}
                                    duration={countUpDuration}
                                    end={currentPrice - bep}
                                    prefix='$'
                                    preserveValue={true}
                                    useEasing={true}
                                />
                            ) : (
                                (0).toFixed(2)
                            )}
                        </div>
                    )}
                </div>
                <OrderList orders={orders.filter((order: Order) => order.type === OrderType.Buy)} name='Purchases' />
            </div>
        </div>
    );
};

export default Orders;
