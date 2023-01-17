import React, { useEffect, useState } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { BingoNum } from '../../types/BingoNum';
import { numColor } from '../../utils/numColor';
import Ball from './Ball';

type Props = { hit: BingoNum[] };

const History: React.FC<Props> = ({ hit }) => {
  const settings = useSettings();
  const [history, setHistory] = useState<BingoNum[]>([]);

  useEffect(() => {
    setHistory(hit.slice(-13).reverse());
  }, [hit]);

  return (
    <div className="absolute w-full h-[25vh] top-0">
      <div className="absolute left-12">
        <Ball
          type={settings.bingo.ball.history}
          num={history[12]}
          color={numColor(history[12])}
          className="absolute -top-24 left-[102rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[11]}
          color={numColor(history[11])}
          className="absolute -top-28 left-[94rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[10]}
          color={numColor(history[10])}
          className="absolute -top-16 left-[86rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[9]}
          color={numColor(history[9])}
          className="absolute -top-20 left-[78rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[8]}
          color={numColor(history[8])}
          className="absolute -top-10 left-[70rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[7]}
          color={numColor(history[7])}
          className="absolute -top-12 left-[62rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[6]}
          color={numColor(history[6])}
          className="absolute -top-2 left-[54rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[5]}
          color={numColor(history[5])}
          className="absolute -top-8 left-[46rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[4]}
          color={numColor(history[4])}
          className="absolute top-6 left-[38rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[3]}
          color={numColor(history[3])}
          className="absolute top-2 left-[30rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[2]}
          color={numColor(history[2])}
          className="absolute top-12 left-[21rem] w-32 h-32 text-[4rem]"
          borderWidth={14}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[1]}
          color={numColor(history[1])}
          className="absolute top-4 left-44 w-36 h-36 text-[4.5rem]"
          borderWidth={16}
        />
        <Ball
          type={settings.bingo.ball.history}
          num={history[0]}
          color={numColor(history[0])}
          className="absolute top-16 w-40 h-40 text-[5rem]"
          borderWidth={18}
        />
      </div>
    </div>
  );
};

export default History;
