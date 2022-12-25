import React, { createContext, useContext, useState } from 'react';
import { Avatar, AvatarStatus } from '../types/Avatar';
import { useSettings } from './SettingsContext';

export type AvatarContextType = {
  avatar: Avatar;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
  status: (status: AvatarStatus) => void;
  voice: (voice: any, after?: () => void) => void;
  before?: () => void;
};

export const AvatarContext = createContext<AvatarContextType>({} as AvatarContextType);

export const useAvatar = () => useContext(AvatarContext);

type Props = {
  children: React.ReactNode;
};

export const AvatarProvider: React.FC<Props> = ({ children }) => {
  const [avatar, setAvatar] = useState<Avatar>({ status: 'none' });
  const settings = useSettings();

  const status = (status: AvatarStatus) => setAvatar((prev: Avatar) => ({ ...prev, status }));

  const voice = (
    voice: any,
    after: () => void = () => {
      status('none');
    },
    before: () => void = () => {
      status('talking');
    }
  ) => {
    const audio = new Audio(voice);
    if (!settings.char.voice) {
      audio.muted = true;
    }
    before();
    audio.play();
    audio.addEventListener('ended', () => {
      status('none');
      after();
    });
  };

  return <AvatarContext.Provider value={{ avatar, setAvatar, status, voice }}>{children}</AvatarContext.Provider>;
};
