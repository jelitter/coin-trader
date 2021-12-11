// import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CoinPrice } from '../models/coin-price';

let minPrice: CoinPrice = { id: null, timeStamp: '', price: Number.MAX_VALUE };
let maxPrice: CoinPrice = { id: null, timeStamp: '', price: -Number.MAX_VALUE };

export default function PricesChart({ prices, bep }: { prices: CoinPrice[]; bep: number }) {
    const rollingMaxPrice = prices.find(p => p?.price === prices.reduce((max, p) => (p?.price > max ? p?.price : max), 0));
    const rollingMinPrice = prices.find(p => p?.price === prices.reduce((min, p) => (p?.price < min ? p?.price : min), Number.MAX_VALUE));

    if (rollingMaxPrice?.price > maxPrice?.price) {
        maxPrice = rollingMaxPrice;
    }
    if (rollingMinPrice?.price < minPrice?.price) {
        minPrice = rollingMinPrice;
    }

    const domainMax = bep > 0 ? Math.max(maxPrice?.price ?? 0, bep) : maxPrice?.price ?? 0;
    const domainMin = bep > 0 ? Math.min(minPrice?.price ?? 0, bep) : minPrice?.price ?? 0;

    // eslint-disable-next-line eqeqeq
    const ticks = [maxPrice.id ? maxPrice?.price : rollingMaxPrice?.price, minPrice.id ? minPrice?.price : rollingMinPrice?.price, bep]
        .filter(p => p === +p)
        .sort((a, b) => a - b);

    return (
        <div style={{ backgroundColor: '#292d36' }}>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    width={500}
                    height={300}
                    data={prices}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 10,
                        bottom: 10,
                    }}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='timeStamp' />
                    <YAxis dataKey='price' domain={[Math.floor(domainMin - 5), Math.ceil(domainMax + 5)]} />
                    <YAxis
                        dataKey='price'
                        domain={[Math.floor(domainMin - 5), Math.ceil(domainMax + 5)]}
                        tickCount={ticks.length}
                        ticks={ticks}
                        yAxisId='right'
                        orientation='right'
                    />
                    <Tooltip />
                    <Legend />
                    {prices?.length > 0 && (
                        <>
                            <ReferenceLine y={maxPrice?.price} stroke='red' label='Max' />
                            <ReferenceLine y={minPrice?.price} stroke='blue' label='Min' />
                        </>
                    )}
                    {bep > 0 && <ReferenceLine y={bep} stroke='green' label='B.E.P.' />}
                    <Line dataKey='price' dot={false} isAnimationActive={false} stroke='#8884d8' strokeWidth={2} unit={'$'} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
