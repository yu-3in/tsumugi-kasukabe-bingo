export type Settings = {
  general: GeneralSettings;
  bingo: BingoSettings;
  char: CharSettings;
  voice: VoiceSettings;
};
export type GeneralSettings = {};

export type BingoSettings = {};

export type CharSettings = {
  display: boolean; // アバターを表示するかどうか
  voice: boolean; // 音声を再生するかどうか
};

export type VoiceSettings = {};
