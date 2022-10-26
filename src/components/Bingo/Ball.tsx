import React from 'react';
import { BingoNum } from '../../types/BingoNum';
import { Colors } from '../../types/Colors';
import { cn } from '../../utils/cn';
import { bgColor } from '../../utils/css/bgColor';
import { borderColor } from '../../utils/css/borderColor';

type Props = {
  hit: boolean;
  num: BingoNum;
  color: Colors;
  className?: string;
};

const Ball: React.FC<Props> = ({ hit, num, color, className }) => {
  return (
    <div
      className={cn(
        className,
        'rounded-full  w-[calc(100vh/15.5)] h-[calc(100vh/15.5)] text-4xl flex items-center justify-center hover:cursor-pointer',
        hit ? `border-none ${bgColor(color)} text-gray-700` : `${borderColor(color)} bg-[#fff] text-gray-400 opacity-80`
      )}
      style={{ borderWidth: 8 }}
    >
      {num}
    </div>
  );
};

export default Ball;
