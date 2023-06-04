export const convertFifthQualityToColor = (
  quality: number | null,
  isDarkTheme: boolean
) => {
  if (isDarkTheme) {
    if (quality === null) return '#4A7370';

    if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

    switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
      case -12:
        return '#8587C6';
      case -11:
        return '#9675C6';
      case -10:
        return '#9E6CC5';
      case -9:
        return '#A763C5';
      case -8:
        return '#B158C5';
      case -7:
        return '#BD4CC5';
      case -6:
        return '#CB3DC5';
      case -5:
        return '#D640C1';
      case -4:
        return '#DB4EC7';
      case -3:
        return '#E05BCD';
      case -2:
        return '#E86DD5';
      case -1:
        return '#EF7FDD'; // handle value between -1 and -0.005
      case 0:
        return '#C2D8D7'; // handle value between 0.005 and 1
      case 1:
        return '#C2D8D7';
      case 2:
        return '#AEC7C5';
      case 3:
        return '#97B2B0';
      case 4:
        return '#7E9C9A';
      case 5:
        return '#6B8C89';
      case 6:
        return '#5C807E';
      case 7:
        return '#4A7370';
      default:
        return '#4A7370';
    }
  }

  if (quality === null) return '#6D9693';

  if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

  switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
    case -12:
      return '#9D2A68';
    case -11:
      return '#C32D69';
    case -10:
      return '#D72F6A';
    case -9:
      return '#ED306A';
    case -8:
      return '#F33151';
    case -7:
      return '#FB3230';
    case -6:
      return '#FF321F';
    case -5:
      return '#FF5435';
    case -4:
      return '#FF623E';
    case -3:
      return '#FF6F46';
    case -2:
      return '#FF7A4C';
    case -1:
      return '#FF8352'; // handle value between -1 and -0.005
    case 0:
      return '#CCE9E7'; // handle value between 0.005 and 1
    case 1:
      return '#CCE9E7';
    case 2:
      return '#BFDDDB';
    case 3:
      return '#B6D4D2';
    case 4:
      return '#ABC9C7';
    case 5:
      return '#9AB9B7';
    case 6:
      return '#8CAEAB';
    case 7:
      return '#6D9693';
    default:
      return '#6D9693';
  }
};

export const convertThirdQualityToColor = (
  quality: number | null,
  isDarkTheme: boolean,
  isMin3rd?: boolean
) => {
  if (quality === null) {
    if (isDarkTheme) {
      return '#B9B9B9';
    }
    return '#B9B9B9';
  }
  const value = Math.max(Math.min(Math.floor(Math.abs(quality)), 20), -1);
  console.log(quality, value);

  if (isDarkTheme) {
    if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

    if (isMin3rd) {
      switch (value) {
        case -1:
          return '#cfe2f3'; // handle value between -1 and -0.005
        case 0:
          return '#cfe2f3'; // handle value between 0.005 and 1
        case 1:
          return '#fff2cc';
        case 2:
          return '#fff2cc';
        case 3:
          return '#ffe598';
        case 4:
          return '#ffe598';
        case 5:
          return '#ffd966';
        case 6:
          return '#ffd966';
        case 7:
          return '#f6b26b';
        case 8:
          return '#e69138';
        case 9:
          return '#e69138';
        case 10:
          return '#cc0000';
        case 11:
          return '#cc0000';
        case 12:
          return '#cc0000';
        case 13:
          return '#851f0d';
        case 14:
          return '#851f0d';
        case 15:
          return '#434343';
        case 16:
          return '#434343';
        case 17:
          return '#434343';
        case 18:
          return '#434343';
        case 19:
          return '#434343';
        case 20:
          return '#434343';
        default:
          return '#cfe2f3';
      }
    }

    switch (value) {
      case -1:
        return '#cfe2f3'; // handle value between -1 and -0.005
      case 0:
        return '#cfe2f3'; // handle value between 0.005 and 1
      case 1:
        return '#fff2cc';
      case 2:
        return '#fff2cc';
      case 3:
        return '#ffe598';
      case 4:
        return '#ffe598';
      case 5:
        return '#ffd966';
      case 6:
        return '#ffd966';
      case 7:
        return '#f6b26b';
      case 8:
        return '#f6b26b';
      case 9:
        return '#e69138';
      case 10:
        return '#cc0000';
      case 11:
        return '#cc0000';
      case 12:
        return '#851f0d';
      case 13:
        return '#851f0d';
      case 14:
        return '#434343';
      case 15:
        return '#434343';
      case 16:
        return '#434343';
      case 17:
        return '#434343';
      case 18:
        return '#434343';
      case 19:
        return '#434343';
      case 20:
        return '#434343';
      default:
        return '#cfe2f3';
    }
  }

  // light theme
  if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

  if (isMin3rd) {
    switch (value) {
      case -1:
        return '#cfe2f3'; // handle value between -1 and -0.005
      case 0:
        return '#cfe2f3'; // handle value between 0.005 and 1
      case 1:
        return '#fff2cc';
      case 2:
        return '#fff2cc';
      case 3:
        return '#ffe598';
      case 4:
        return '#ffe598';
      case 5:
        return '#ffd966';
      case 6:
        return '#ffd966';
      case 7:
        return '#f6b26b';
      case 8:
        return '#e69138';
      case 9:
        return '#e69138';
      case 10:
        return '#cc0000';
      case 11:
        return '#cc0000';
      case 12:
        return '#cc0000';
      case 13:
        return '#851f0d';
      case 14:
        return '#851f0d';
      case 15:
        return '#434343';
      case 16:
        return '#434343';
      case 17:
        return '#434343';
      case 18:
        return '#434343';
      case 19:
        return '#434343';
      case 20:
        return '#434343';
      default:
        return '#cfe2f3';
    }
  }

  switch (value) {
    case -1:
      return '#cfe2f3'; // handle value between -1 and -0.005
    case 0:
      return '#cfe2f3'; // handle value between 0.005 and 1
    case 1:
      return '#fff2cc';
    case 2:
      return '#fff2cc';
    case 3:
      return '#ffe598';
    case 4:
      return '#ffe598';
    case 5:
      return '#ffd966';
    case 6:
      return '#ffd966';
    case 7:
      return '#f6b26b';
    case 8:
      return '#f6b26b';
    case 9:
      return '#e69138';
    case 10:
      return '#cc0000';
    case 11:
      return '#cc0000';
    case 12:
      return '#851f0d';
    case 13:
      return '#851f0d';
    case 14:
      return '#434343';
    case 15:
      return '#434343';
    case 16:
      return '#434343';
    case 17:
      return '#434343';
    case 18:
      return '#434343';
    case 19:
      return '#434343';
    case 20:
      return '#434343';
    default:
      return '#cfe2f3';
  }
};
