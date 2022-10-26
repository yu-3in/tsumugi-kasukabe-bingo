import React, { useCallback, useRef, useState } from 'react';
import { sounds } from '../../sounds';
import { BingoNum } from '../../types/BingoNum';
import { Colors } from '../../types/Colors';
import { cn } from '../../utils/cn';
import { colors } from '../../utils/colors';

type Props = {
  notHit: BingoNum[];
  setNotHit: React.Dispatch<React.SetStateAction<BingoNum[]>>;
  hit: BingoNum[];
  setHit: React.Dispatch<React.SetStateAction<BingoNum[]>>;
};

const Roulette: React.FC<Props> = ({ notHit, setNotHit, hit, setHit }) => {
  // 表示する数値
  const [num, setNum] = useState<number>(0);
  // 数値のラインの色
  const [color, setColor] = useState<Colors | null>(null);
  // ボタンを再度押せるまでの判定を担う
  const [next, setNext] = useState<boolean>(true);
  // ルーレットが回っているかどうか
  const [running, setRunning] = useState<boolean>(false);

  // スタートボタンを押したときの処理
  const handleClickStart = useCallback(() => {
    // 処理が終わるまでスタートボタンを押せないようにする
    setNext(false);
    // 初期設定
    setColor(null);
    setRunning(true);

    const interval = setInterval(() => {
      // ルーレットを回す
      const random = Math.floor(Math.random() * 75 + 1) as BingoNum;
      setNum(random);
      setColor(colors[Math.floor(random / 15)]);
    }, 80);

    const voice1 = new Audio(sounds.bingo.次の番号は);
    voice1.play();

    setTimeout(() => {
      // ルーレットの状態を停止にする（実際にはclearInterval()が実行されるまで回っている）
      setRunning(false);
      // 乱数生成
      const result = notHit[Math.floor(Math.random() * notHit.length)];

      // 結果の反映
      setNum(result);
      setColor(colors[Math.floor(result / 15)]);
      setHit([...hit, result]);
      setNotHit(notHit.filter((i) => i != result));
      // ルーレットを停止する
      clearInterval(interval);

      const voice2 = new Audio(sounds.nums[result]);
      const voice3 = new Audio(sounds.bingo.番です);
      voice2.play();
      voice2.addEventListener('ended', () => {
        // voice2再生後
        voice3.play();
      });
      voice3.addEventListener('ended', () => {
        // voice3再生後
        // ボタンを押せるようにする
        setNext(true);
      });
    }, 1500);
  }, [notHit, hit]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div
        className={cn(running && 'opacity-80', 'text-[25em] text-center leading-none')}
        style={{ WebkitTextStroke: `20px var(--pop-${color})` }}
      >
        {num}
      </div>
      <button
        className={
          'px-4 py-6 rounded-2xl w-64 text-2xl block bg-violet-300 hover:cursor-pointer disabled:hover:cursor-wait disabled:opacity-50'
        }
        onClick={handleClickStart}
        disabled={!next}
      >
        スタート
      </button>
    </div>
  );
};

export default Roulette;
