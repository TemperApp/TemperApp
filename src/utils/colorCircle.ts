export const convertFifthQualityToColor = (
  quality: number | null,
  isDarkTheme: boolean
) => {
  if (isDarkTheme) {
    if (quality === null) return '#4A7370';

    if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

    switch (Math.max(Math.min(Math.floor(Math.sqrt(quality*quality)*quality), 7), -12)) {
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

  switch (Math.max(Math.min(Math.floor(Math.sqrt(quality*quality)*quality), 7), -12)) {
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
      return '#4A7370';
    }
    return '#6D9693';
  }

  const value = Math.max(Math.min(Math.floor(Math.abs(quality)), 20), -1);

  // DARK THEME
  if (isDarkTheme) {
    if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

    // MINOR THIDS
    if (isMin3rd) {
      switch (value) {
        case -1:
          return "#B9B9B9"; // handle value between -1 and -0.005
        case 0:
          return "#B9B9B9"; // handle value between 0.005 and 1
        case 1:
          return "#FBDDF6";
        case 2:
          return "#FAD3F3";
        case 3:
          return "#F8C9F1";
        case 4:
          return "#F7BBED";
        case 5:
          return "#F5B1EA";
        case 6:
          return "#F4A8E8";
        case 7:
          return "#F39EE5";
        case 8:
          return "#EF7FDD";
        case 9:
          return "#EE76DB";
        case 10:
          return "#E65CD3";
        case 11:
          return "#E149CD";
        case 12:
          return "#C939BF";
        case 13:
          return "#BC41BB";
        case 14:
          return "#B248B8";
        case 15:
          return "#A64FB5";
        case 16:
          return "#9C5DB7";
        case 17:
          return "#906CB9";
        case 18:
          return "#8A73BA";
        case 19:
          return "#8679BB";
        case 20:
          return "#817FBC";
        default:
          return "#758EBE";
      }
    }

    // MAJOR THIRDS
    switch (value) {
      case -1:
        return "#B9B9B9"; // handle value between -1 and -0.005
      case 0:
        return "#FBDDF6"; // handle value between 0.005 and 1
      case 1:
        return "#FAD3F3";
      case 2:
        return "#F8C9F1";
      case 3:
        return "#F7BBED";
      case 4:
        return "#F5B1EA";
      case 5:
        return "#F4A8E8";
      case 6:
        return "#F39EE5";
      case 7:
        return "#EF7FDD";
      case 8:
        return "#EE76DB";
      case 9:
        return "#E65CD3";
      case 10:
        return "#E149CD";
      case 11:
        return "#C939BF";
      case 12:
        return "#BC41BB";
      case 13:
        return "#B248B8";
      case 14:
        return "#A64FB5";
      case 15:
        return "#9C5DB7";
      case 16:
        return "#906CB9";
      case 17:
        return "#8A73BA";
      case 18:
        return "#8679BB";
      case 19:
        return "#817FBC";
      case 20:
        return "#758EBE";
      default:
        return "#B9B9B9";
    }
  }

  // LIGHT THEME
  if (quality < 0.005 && quality > -0.005) return '#f5fbfb';

  // MINOR THIRDS
  if (isMin3rd) {
    switch (value) {
      case -1:
        return "#B9B9B9"; // handle value between -1 and -0.005
      case 0:
        return "#B9B9B9"; // handle value between 0.005 and 1
      case 1:
        return "#F8F3E4";
      case 2:
        return "#FAECD1";
      case 3:
        return "#FFDDA7";
      case 4:
        return "#FFC984";
      case 5:
        return "#FFBB75";
      case 6:
        return "#FFAA6B";
      case 7:
        return "#FF8B57";
      case 8:
        return "#FF8352";
      case 9:
        return "#FF7E4F";
      case 10:
        return "#FF7A4C";
      case 11:
        return "#FF6C44";
      case 12:
        return "#FF603C";
      case 13:
        return "#FF5535";
      case 14:
        return "#FF492E";
      case 15:
        return "#FB423C";
      case 16:
        return "#F63B4B";
      case 17:
        return "#F03060";
      case 18:
        return "#E9307D";
      case 19:
        return "#D32E77";
      case 20:
        return "#B92C70";
      default:
        return "#9D2A68";
    }
  }

  // MAJOR THIRDS
  switch (value) {
    case -1:
      return "#B9B9B9"; // handle value between -1 and -0.005
    case 0:
      return "#F8F3E4"; // handle value between 0.005 and 1
    case 1:
      return "#FAECD1";
    case 2:
      return "#FFDDA7";
    case 3:
      return "#FFC984";
    case 4:
      return "#FFBB75";
    case 5:
      return "#FFAA6B";
    case 6:
      return "#FF8B57";
    case 7:
      return "#FF8352";
    case 8:
      return "#FF7E4F";
    case 9:
      return "#FF7A4C";
    case 10:
      return "#FF6C44";
    case 11:
      return "#FF603C";
    case 12:
      return "#FF5535";
    case 13:
      return "#FF492E";
    case 14:
      return "#FB423C";
    case 15:
      return "#F63B4B";
    case 16:
      return "#F03060";
    case 17:
      return "#E9307D";
    case 18:
      return "#D32E77";
    case 19:
      return "#B92C70";
    case 20:
      return "#9D2A68";
    default:
      return "#B9B9B9";
  }
};
