import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

type Props = {
  className?: string;
  children: ReactNode;
};

const Button: React.FC<Props> = ({ className, children }) => {
  return <button className={cn(className, 'rounded-2xl bg-red-200 block')}>{children}</button>;
};

export default Button;
