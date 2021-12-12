import React from 'react';
import CountUp from 'react-countup';

export default function HeaderDetail({ currentPrice, PL, realizedPL }: { currentPrice: number; PL: number; realizedPL: number }) {
    return (
        <div className='detail'>
            <table>
                <tbody>
                    <tr>
                        <td>Coin Current Price</td>
                        <td
                            style={{
                                color: 'gold',
                                fontFamily: '"Lucida Console", Monaco, monospace',
                                fontWeight: '500',
                                textAlign: 'right',
                                width: '40%',
                            }}>
                            <CountUp preserveValue={true} end={currentPrice} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                        </td>
                    </tr>
                    <tr>
                        <td>Profit/Loss</td>
                        <td
                            style={{
                                color: PL >= 0 ? '#43a334' : '#ec5e33',
                                fontFamily: '"Lucida Console", Monaco, monospace',
                                textAlign: 'right',
                            }}>
                            <CountUp preserveValue={true} end={PL} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                        </td>
                    </tr>
                    <tr>
                        <td>Realized Profit/Loss</td>
                        <td
                            style={{
                                color: realizedPL >= 0 ? '#43a334' : '#ec5e33',
                                fontFamily: '"Lucida Console", Monaco, monospace',
                                textAlign: 'right',
                            }}>
                            <CountUp preserveValue={true} end={realizedPL} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
