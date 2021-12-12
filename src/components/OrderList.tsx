import { useEffect, useState } from 'react';
import { Order } from '../models/order';
import { OrderListProps } from '../models/prop-types';
import { getDuration } from '../services/get-duration';
import './style/OrderList.scss';

export const OrderList = ({ orders, name }: OrderListProps) => {
    const [now, setNow] = useState<Date>(new Date());

    // Use effect to update the `time ago` every second
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='OrderList'>
            {orders.length > 0 ? (
                <>
                    <div className={`vignette ${name}`}></div>
                    <ul>
                        {orders
                            .sort((a, b) => b.orderNumber - a.orderNumber)
                            .map((order: Order) => (
                                <li className='fadeIn' key={order.id}>
                                    <span className='duration'>{getDuration(order.date, now, 'ago')}</span> &nbsp; [Order #
                                    {order.orderNumber}] &nbsp; ${order.price.toFixed(2)}
                                </li>
                            ))}
                    </ul>
                </>
            ) : (
                <div className='empty'>No {name} yet</div>
            )}
        </div>
    );
};
