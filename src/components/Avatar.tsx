import React, { useEffect, useRef, useState } from 'react';
import AvatarNormal from '../assets/avatars/normal.png';
import AvatarTalking from '../assets/avatars/talking.png';
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
    console.log(avatar);
    switch (avatar.status) {
      case 'none':
        setImg(AvatarNormal);
        if (intervalRef.current === null) {
          return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
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
