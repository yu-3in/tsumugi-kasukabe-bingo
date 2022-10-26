import { colors } from './colors';

export const numColor = (num: number) => colors[Math.floor((num - 1) / 15)];
