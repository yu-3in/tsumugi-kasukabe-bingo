import React, { useEffect, useState } from 'react';
import { BingoNum } from '../../types/BingoNum';
import { numColor } from '../../utils/numColor';
import Ball from './Ball';

type Props = { hit: BingoNum[] };

const History: React.FC<Props> = ({ hit }) => {
  const [history, setHistory] = useState<BingoNum[]>([]);

  useEffect(() => {
    setHistory(hit.slice(-14).reverse());
  }, [hit]);

  return (
    <div className="absolute w-full h-[25vh] top-0">
      <div className="absolute left-12">
        <Ball
          type="history"
          num={history[13]}
          color={numColor(history[13])}
          className="absolute -top-12 left-[71.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[12]}
          color={numColor(history[12])}
          className="absolute -top-6 left-[66.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[11]}
          color={numColor(history[11])}
          className="absolute -top-8 left-[61.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[10]}
          color={numColor(history[10])}
          className="absolute -top-2 left-[56.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[9]}
          color={numColor(history[9])}
          className="absolute -top-4 left-[51.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[8]}
          color={numColor(history[8])}
          className="absolute top-2 left-[46.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[7]}
          color={numColor(history[7])}
          className="absolute top-0 left-[41.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[6]}
          color={numColor(history[6])}
          className="absolute top-6 left-[36.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[5]}
          color={numColor(history[5])}
          className="absolute top-3 left-[31.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[4]}
          color={numColor(history[4])}
          className="absolute top-12 left-[26.5rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[3]}
          color={numColor(history[3])}
          className="absolute top-4 left-[21rem] w-28 h-28 text-[3.5rem]"
          borderWidth={12}
        />
        <Ball
          type="history"
          num={history[2]}
          color={numColor(history[2])}
          className="absolute top-12 left-60 w-32 h-32 text-[4rem]"
          borderWidth={14}
        />
        <Ball
          type="history"
          num={history[1]}
          color={numColor(history[1])}
          className="absolute top-4 left-32 w-36 h-36 text-[4.5rem]"
          borderWidth={16}
        />
        <Ball
          type="history"
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
