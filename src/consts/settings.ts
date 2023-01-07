import { Settings } from '../types/Settings';
import { firstVoicesConst } from './firstVoices';

export const defaultSettingsValue: Settings = {
  general: { fullscreenLaunch: true },
  bingo: {},
  char: {
    display: true,
    voice: true,
    firstVoices: Object.assign({}, ...firstVoicesConst.map(({ name, defaultActive }) => ({ [name]: defaultActive })))
  },
  sound: {}
};
