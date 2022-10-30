import { BingoNum } from '../../types/BingoNum';

interface ElectronWindow extends Window {
  db: {
    fetchBingo: () => Promise<BingoNum[]>;
    storeBingo: (bingo: BingoNum[]) => Promise<void>;
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
