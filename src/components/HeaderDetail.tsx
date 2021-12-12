import CountUp from 'react-countup';
import { HeaderDetailProps } from '../models/prop-types';
import './style/HeaderDetail.scss';

export const HeaderDetail = ({ currentPrice, PL, realizedPL }: HeaderDetailProps) => (
    <div className='HeaderDetail'>
        <table>
            <tbody>
                <tr>
                    <td>Coin Current Price</td>
                    <td className='current'>
                        <CountUp preserveValue={true} end={currentPrice} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                    </td>
                </tr>
                <tr>
                    <td>Profit/Loss</td>
                    <td className={`pl ${PL >= 0 ? 'pos' : 'neg'}`}>
                        <CountUp preserveValue={true} end={PL} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                    </td>
                </tr>
                <tr>
                    <td>Realized Profit/Loss</td>
                    <td className={`realized ${realizedPL >= 0 ? 'pos' : 'neg'}`}>
                        <CountUp preserveValue={true} end={realizedPL} decimals={2} duration={0.5} useEasing={true} prefix='$' />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
