import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { CoinTrader } from './components/CoinTrader';
import { Footer } from './components/Footer';
import { getCoinPrices, PRICES_LENGTH } from './models/coin-price';
import { Order } from './models/order';
import { INITIAL_WALLET, Wallet } from './models/wallet';

const initialPrices = getCoinPrices(PRICES_LENGTH);

const App = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [wallet, setWallet] = useState<Wallet>(INITIAL_WALLET);

    const scrollInto = useRef(null);
    useEffect(() => {
        scrollInto.current.scrollIntoView();
    });

    return (
        <div className='App' ref={scrollInto}>
            <CoinTrader orders={orders} initialPrices={initialPrices} setOrders={setOrders} wallet={wallet} setWallet={setWallet} />
            <Footer />
        </div>
    );
};

export default App;
