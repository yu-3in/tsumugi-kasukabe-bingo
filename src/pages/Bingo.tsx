import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { BingoNum } from '../types/BingoNum';
import Roulette from '../components/Bingo/Roulette';
import History from '../components/Bingo/History';
import Balls from '../components/Bingo/Balls';
import { fetchBingo, storeBingo } from '../api/db/bingo';
import { useSearchParams } from 'react-router-dom';

type Props = {
  preview?: boolean; // 設定画面で表示するかどうか（プレビュー画面かどうか）
};

const Bingo: React.FC<Props> = ({ preview = false }) => {
  // 1 ~ 75が照準に格納された配列を初期値とする
  const [notHit, setNotHit] = useState<BingoNum[]>([...Array(75)].map((_, i) => ++i) as BingoNum[]);
  const [hit, setHit] = useState<BingoNum[]>(preview ? [38, 7, 12, 32, 65, 72] : []);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (preview) return;

    if (searchParams.get('type') === 'continue') {
      // 「つづきから」ボタンが押された
      (async () => {
        // ビンゴの履歴を反映する
        const bingo = await fetchBingo();
        setHit(bingo);
      })();
    }
  }, []);

  useEffect(() => {
    if (preview) return;

    // 「はじめから」ボタンが押されても、「スタート」ボタンが押されるまで履歴はリセットしない
    if (hit.length > 0) {
      // hitが更新されるたびに履歴を更新する
      storeBingo(hit);
    }
  }, [hit]);

  return (
    <Layout className="w-full">
      <div className="flex justify-start items-center">
        <div className="grid grid-cols-5 w-4/12">
          <Balls hit={hit} />
        </div>
        <div className="grid grid-cols-2 w-8/12">
          <History hit={hit} />
          <Roulette notHit={notHit} setNotHit={setNotHit} hit={hit} setHit={setHit} preview={preview} />
        </div>
      </div>
    </Layout>
  );
};

export default Bingo;
