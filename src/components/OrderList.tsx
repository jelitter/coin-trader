import React, { useEffect, useState } from 'react';
import { Order } from '../models/order';
import { getDuration } from '../services/get-duration';
import './style/OrderList.scss';

export const OrderList = ({ orders, name }: { orders: Order[]; name: string }) => {
    const [now, setNow] = useState<Date>(new Date());

    // Use effect to update the `time ago` every second
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {orders.length > 0 ? (
                <>
                    <div className='vignette'></div>
                    <ul>
                        {orders
                            .sort((a, b) => b.orderNumber - a.orderNumber)
                            .map((order: Order) => (
                                <li className='fadeIn' key={order.id}>
                                    <span style={{ color: '#5d6574' }}>{getDuration(order.date, now, 'ago')}</span> [Order #
                                    {order.orderNumber}] ${order.price.toFixed(2)}
                                </li>
                            ))}
                    </ul>
                </>
            ) : (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', filter: 'grayscale(0.25)' }}>
                    No {name} yet
                </div>
            )}
        </>
    );
};
