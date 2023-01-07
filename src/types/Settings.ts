export type Settings = {
  general: GeneralSettings;
  bingo: BingoSettings;
  char: CharSettings;
  sound: SoundSettings;
};
export type GeneralSettings = {
  fullscreenLaunch: boolean; // 全画面で起動するかどうか
};

export type BingoSettings = {};

export type CharSettings = {
  display: boolean; // アバターを表示するかどうか
  voice: boolean; // 音声を再生するかどうか
  firstVoices: {
    次の番号は: boolean;
    はいはいー次はーー: boolean;
    さてさて次の番号はーー: boolean;
    さてさてお次はー: boolean;
    次はどれにしようかなんー: boolean;
    次は何かなえーと: boolean;
    次に選ぶのは: boolean;
    選ばれたのは: boolean;
    次はこの番号で決まり: boolean;
    どれにしようかなえーと: boolean;
    そうだな次の番号は: boolean;
    次はこれだね: boolean;
    次はどれがいいかな: boolean;
  };
};

export type SoundSettings = {};
