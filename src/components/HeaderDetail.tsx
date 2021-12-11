import React from 'react';

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
                            ${currentPrice.toFixed(2)}
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
                            ${PL.toFixed(2)}
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
                            ${realizedPL.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
