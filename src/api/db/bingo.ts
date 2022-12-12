import { BingoNum } from '../../types/BingoNum';
import { Settings } from '../../types/Settings';

interface ElectronWindow extends Window {
  db: {
    fetchBingo: () => Promise<BingoNum[]>;
    storeBingo: (bingo: BingoNum[]) => Promise<void>;
    fetchSettings: () => Promise<Settings>;
    storeSettings: (settings: Settings) => Promise<void>;
  };
}

declare const window: ElectronWindow;

export const fetchBingo = async (): Promise<BingoNum[]> => {
  const bingo = await window.db.fetchBingo();
  return bingo;
};

export const storeBingo = async (bingo: BingoNum[]): Promise<void> => {
  await window.db.storeBingo(bingo);
};

export const fetchSettings = async (): Promise<{}> => {
  const settings = await window.db.fetchSettings();
  return settings;
};

export const storeSettings = async (settings: Settings): Promise<void> => {
  await window.db.storeSettings(settings);
};
