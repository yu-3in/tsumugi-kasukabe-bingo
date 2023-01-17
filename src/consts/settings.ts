import { Settings } from '../types/Settings';
import { firstVoicesConst } from './firstVoices';

export const defaultSettingsValue: Settings = {
  general: { fullscreenLaunch: true },
  bingo: { ball: { notHit: 'normal', hit: 'filled', history: 'normal' } },
  char: {
    display: true,
    voice: true,
    firstVoices: Object.assign({}, ...firstVoicesConst.map(({ name, defaultActive }) => ({ [name]: defaultActive })))
  },
  sound: { mute: false }
};
