import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

type Props = {
  className?: string;
  children: ReactNode;
};

const Button: React.FC<Props> = ({ className, children }) => {
  return <button className={cn(className, 'rounded-2xl py-4 px-6 text-2xl hover:opacity-90')}>{children}</button>;
};

export default Button;
