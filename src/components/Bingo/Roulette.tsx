import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { preview } from 'vite';
import { firstVoicesConst } from '../../consts/firstVoices';
import { useAvatar } from '../../contexts/AvatarContext';
import { useSettings } from '../../contexts/SettingsContext';
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
  preview: boolean;
};

const Roulette: React.FC<Props> = ({ notHit, setNotHit, hit, setHit, preview }) => {
  const settings = useSettings();
  const firstVoices = useMemo(
    () => firstVoicesConst.filter(({ name }) => settings.char.firstVoices[name]).map(({ name }) => sounds.bingo[name]),
    [settings.char.firstVoices]
  );
  // 表示する数値
  const [num, setNum] = useState<number>(0);
  // 数値のラインの色
  const [color, setColor] = useState<Colors | null>(null);
  // ボタンを再度押せるまでの判定を担う
  const [next, setNext] = useState<boolean>(true);
  // ルーレットが回っているかどうか
  const [running, setRunning] = useState<boolean>(false);
  const { voice } = useAvatar();
  const [first, setFirst] = useState<boolean>(true);

  useEffect(() => {
    if (hit.length > 0) {
      setNum(hit[hit.length - 1]);
      setColor(colors[Math.floor((hit[hit.length - 1] - 1) / 15)]);
    }
  }, [hit]);

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

    let firstVoice;

    if (first && hit.length === 0) {
      firstVoice = sounds.bingo.始めの番号は;
      setFirst(false);
    } else {
      firstVoice = firstVoices[Math.floor(Math.random() * firstVoices.length)];
    }

    voice(firstVoice, () => {
      setTimeout(() => {
        // ルーレットの状態を停止にする（実際にはclearInterval()が実行されるまで回っている）
        setRunning(false);
        // 乱数生成
        const result = notHit[Math.floor(Math.random() * notHit.length)];

        // 結果の反映
        setHit([...hit, result]);
        setNotHit(notHit.filter((i) => i != result));
        // ルーレットを停止する
        clearInterval(interval);

        voice(sounds.nums[result], () => {
          voice(sounds.bingo.番です, () => {
            setNext(true);
          });
        });
      }, 500);
    });
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
        onClick={preview ? undefined : handleClickStart}
        disabled={!next}
      >
        スタート
      </button>
    </div>
  );
};

export default Roulette;
