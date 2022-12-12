import React, { createContext, useContext, useEffect, useState } from 'react';
import { storeSettings } from '../api/db/bingo';
import { Settings } from '../types/Settings';

export const SettingsContext = createContext<Settings>({} as Settings);
export const SetSettingsContext = createContext<React.Dispatch<React.SetStateAction<Settings>>>(() => {});

export const useSettings = () => useContext(SettingsContext);
export const useSetSettings = () => useContext(SetSettingsContext);

type Props = {
  children: React.ReactNode;
};

export const SettingsProvider: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>({ general: {}, bingo: {}, char: {}, voice: {} });

  useEffect(() => {
    storeSettings({ ...settings });
  }, [settings]);

  return (
    <SettingsContext.Provider value={settings}>
      <SetSettingsContext.Provider value={setSettings}>{children}</SetSettingsContext.Provider>
    </SettingsContext.Provider>
  );
};
