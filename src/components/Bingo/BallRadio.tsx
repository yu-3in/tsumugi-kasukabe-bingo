import React from 'react';
import Ball, { BallProps } from './Ball';

type Props = {
  name: string;
  ball: BallProps;
  checked?: boolean;
  handleChange: () => void;
};
const BallRadio: React.FC<Props> = ({ name, ball, checked = false, handleChange }) => {
  return (
    <label className="flex gap-2 flex-col items-center">
      <Ball {...ball} />
      <input type="radio" name={name} checked={checked} onChange={handleChange} />
    </label>
  );
};

export default BallRadio;
