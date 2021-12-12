import CountUp from 'react-countup';
import { BreakEvenPriceProps } from '../models/prop-types';
import './style/BreakEvenPrice.scss';

export const BreakEvenPrice = ({ bep, currentPrice, countUpDuration }: BreakEvenPriceProps) => (
    <div className='BreakEvenPrice' title='Break Even Price'>
        <div>B.E.P.</div>
        <div className='bep'>
            {bep ? (
                <CountUp preserveValue={true} end={bep} decimals={2} duration={countUpDuration} useEasing={true} prefix='$' />
            ) : (
                <>&mdash;</>
            )}
        </div>

        {bep && (
            <div className={`single-pl ${currentPrice - bep >= 0 ? 'pos' : 'neg'}`}>
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
);
