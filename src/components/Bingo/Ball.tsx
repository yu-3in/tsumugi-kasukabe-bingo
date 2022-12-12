import React from 'react';
import { BingoNum } from '../../types/BingoNum';
import { Colors } from '../../types/Colors';
import { cn } from '../../utils/cn';
import { bgColor } from '../../utils/css/bgColor';
import { borderColor } from '../../utils/css/borderColor';
import { textColor } from '../../utils/css/textColor';

type Props = {
  type: 'notHit' | 'hit' | 'history';
  num: BingoNum;
  color: Colors;
  borderWidth?: number;
  className?: string;
};

const Ball: React.FC<Props> = ({ type, num, color, borderWidth = 8, className }) => {
  return (
    <div
      className={cn(
        className,
        'rounded-full  w-[calc(100vh/15.5)] h-[calc(100vh/15.5)] text-4xl flex items-center justify-center hover:cursor-pointer',
        type === 'notHit' && `${borderColor(color)} bg-[#fff] text-gray-400 opacity-80`,
        // type === 'hit' && `${borderColor(color)} text-gray-700 bg-white`,
        type === 'hit' && `border-none ${textColor(color)} bg-gray-700`,
        type == 'history' && `${borderColor(color)} bg-[#fff] text-gray-400`
      )}
      style={{ borderWidth }}
    >
      {num}
    </div>
  );
};

export default Ball;
