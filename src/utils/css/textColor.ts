import { Colors } from '../../types/Colors';

export const textColor = (color: Colors) => {
  switch (color) {
    case 'pink':
      return 'text-pop-pink';
    case 'orange':
      return 'text-pop-orange';
    case 'yellow':
      return 'text-pop-yellow';
    case 'blue':
      return 'text-pop-blue';
    case 'green':
      return 'text-pop-green';
  }
};
