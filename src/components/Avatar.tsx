import React, { useEffect, useRef, useState } from 'react';
import AvatarNormal from '../assets/avatars/normal.png';
import AvatarTalking from '../assets/avatars/talking.png';
import AvatarClosedEyes from '../assets/avatars/closed-eyes.png';
import { useAvatar } from '../contexts/AvatarContext';
import { cn } from '../utils/cn';

type Props = {
  className?: string;
};

const Avatar: React.FC<Props> = ({ className }) => {
  const [img, setImg] = useState<string>(AvatarNormal);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const { avatar } = useAvatar();

  useEffect(() => {
    setImg(AvatarNormal);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    switch (avatar.status) {
      case 'none':
        intervalRef.current = setInterval(() => {
          setImg(AvatarClosedEyes);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 100);
          setTimeout(() => {
            setImg(AvatarClosedEyes);
          }, 1000);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 1100);
          setTimeout(() => {
            setImg(AvatarClosedEyes);
          }, 3100);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 3200);
          setTimeout(() => {
            setImg(AvatarClosedEyes);
          }, 5000);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 5100);
          setTimeout(() => {
            setImg(AvatarClosedEyes);
          }, 8500);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 8600);
        }, 10000);
        break;
      case 'talking':
        intervalRef.current = setInterval(() => {
          setImg(AvatarTalking);
          setTimeout(() => {
            setImg(AvatarNormal);
          }, 100);
        }, 200);
        break;
    }
  }, [avatar]);

  return <img src={img} className={cn(className)} />;
};

export default Avatar;
