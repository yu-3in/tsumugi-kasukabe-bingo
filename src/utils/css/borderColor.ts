import { Colors } from '../../types/Colors';

export const borderColor = (color: Colors) => {
  switch (color) {
    case 'pink':
      return 'border-pop-pink';
    case 'orange':
      return 'border-pop-orange';
    case 'yellow':
      return 'border-pop-yellow';
    case 'blue':
      return 'border-pop-blue';
    case 'green':
      return 'border-pop-green';
  }
};
