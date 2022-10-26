import { Colors } from '../../types/Colors';

export const bgColor = (color: Colors) => {
  switch (color) {
    case 'pink':
      return 'bg-pop-pink';
    case 'orange':
      return 'bg-pop-orange';
    case 'yellow':
      return 'bg-pop-yellow';
    case 'blue':
      return 'bg-pop-blue';
    case 'green':
      return 'bg-pop-green';
  }
};
