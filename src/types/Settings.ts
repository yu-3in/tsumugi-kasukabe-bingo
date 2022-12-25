export type Settings = {
  general: GeneralSettings;
  bingo: BingoSettings;
  char: CharSettings;
  sound: SoundSettings;
};
export type GeneralSettings = {};

export type BingoSettings = {};

export type CharSettings = {
  display: boolean; // アバターを表示するかどうか
  voice: boolean; // 音声を再生するかどうか
};

export type SoundSettings = {};
