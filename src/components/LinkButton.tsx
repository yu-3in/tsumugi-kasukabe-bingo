import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import Button from './Button';

type Props = {
  to?: string;
  onClick?: () => any;
  className?: string;
  children: ReactNode;
};

const LinkButton: React.FC<Props> = ({ to, onClick, className, children }) => {
  return (
    <Link to={to ?? ''}>
      <Button onClick={onClick} className={cn(className)}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
