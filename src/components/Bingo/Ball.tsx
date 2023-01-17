import React from 'react';
import { BingoNum } from '../../types/BingoNum';
import { Colors } from '../../types/Colors';
import { cn } from '../../utils/cn';
import { bgColor } from '../../utils/css/bgColor';
import { borderColor } from '../../utils/css/borderColor';
import { textColor } from '../../utils/css/textColor';

export type BallType = 'normal' | 'filled' | 'filledBorder' | 'dark';

export type BallProps = {
  type: BallType;
  // type: 'notHit' | 'hit' | 'history';
  num: BingoNum;
  color: Colors;
  borderWidth?: number;
  className?: string;
};

const Ball: React.FC<BallProps> = ({ type, num, color, borderWidth = 8, className }) => {
  return (
    <div
      className={cn(
        className,
        'rounded-full  w-[calc(100vh/15.5)] h-[calc(100vh/15.5)] text-4xl flex items-center justify-center hover:cursor-pointer',
        type === 'normal' && `${borderColor(color)} bg-[#fff] text-gray-400 opacity-80`,
        type === 'filled' && `border-none text-gray-700 ${bgColor(color)}`,
        type === 'filledBorder' && `text-gray-700 border-gray-700 ${bgColor(color) ?? 'bg-[rgba(255,255,255,.8)]'}`,
        type === 'dark' && `border-none ${textColor(color)} bg-gray-700`
      )}
      style={{ borderWidth }}
    >
      {num}
    </div>
  );
};

export default Ball;
