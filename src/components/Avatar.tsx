import React from 'react';
import AvatarNormal from '../assets/avatars/normal.png';
import { cn } from '../utils/cn';

type Props = {
  className?: string;
};

const Avatar: React.FC<Props> = ({ className }) => {
  return <img src={AvatarNormal} className={cn(className)} />;
};

export default Avatar;
