import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { BingoNum } from '../types/BingoNum';
import Roulette from '../components/Bingo/Roulette';
import History from '../components/Bingo/History';
import Balls from '../components/Bingo/Balls';
import { fetchBingo, storeBingo } from '../api/db/bingo';

const Bingo: React.FC = () => {
  // 1 ~ 75が照準に格納された配列を初期値とする
  const [notHit, setNotHit] = useState<BingoNum[]>([...Array(75)].map((_, i) => ++i) as BingoNum[]);
  const [hit, setHit] = useState<BingoNum[]>([]);

  useEffect(() => {
    (async () => {
      // ビンゴの履歴を反映する
      const bingo = await fetchBingo();
      setHit(bingo);
    })();
  }, []);

  useEffect(() => {
    // hitが更新されるたびに履歴を更新する
    storeBingo(hit);
  }, [hit]);

  return (
    <Layout>
      <div className="flex justify-start items-center">
        <div className="grid grid-cols-5 w-4/12">
          <Balls hit={hit} />
        </div>
        <div className="grid grid-cols-2 w-8/12">
          <History hit={hit} />
          <Roulette notHit={notHit} setNotHit={setNotHit} hit={hit} setHit={setHit} />
        </div>
      </div>
    </Layout>
  );
};

export default Bingo;
