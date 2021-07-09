import Settings from "../engine/Settings";

export const convertFifthQualityToColor = (quality: number | null) => {
  if (Settings.darkTheme()) {
    if (quality === null) return "grey";

    if (quality < 0.005 && quality > -0.005) return "white";

    switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
      case -12:
        return "8587C6";
      case -11:
        return "#9675C6";
      case -10:
        return "#9E6CC5";
      case -9:
        return "#A763C5";
      case -8:
        return "#B158C5";
      case -7:
        return "#BD4CC5";
      case -6:
        return "#CB3DC5";
      case -5:
        return "#D640C1";
      case -4:
        return "E268CE";
      case -3:
        return "#EC7CDA";
      case -2:
        return "#F4AFE9";
      case -1:
        return "#F7D4F1"; // handle value between -1 and -0.005
      case 0:
        return "#C2D8D7"; // handle value between 0.005 and 1
      case 1:
        return "#C2D8D7";
      case 2:
        return "#AEC7C5";
      case 3:
        return "#97B2B0";
      case 4:
        return "#7E9C9A";
      case 5:
        return "#6B8C89";
      case 6:
        return "#5C807E";
      case 7:
        return "#4A7370";
      default:
        return "#4A7370";
    }
  }

  if (quality === null) return "#161616";

  if (quality < 0.005 && quality > -0.005) return "#45CBC7";

  switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
    case -12:
      return "#9D2A68";
    case -11:
      return "#C03378";
    case -10:
      return "#D5327B";
    case -9:
      return "#E9307D";
    case -8:
      return "#F8313C";
    case -7:
      return "#ff321f";
    case -6:
      return "#ff5435";
    case -5:
      return "#ff764a";
    case -4:
      return "#ff9960";
    case -3:
      return "#ffbb75";
    case -2:
      return "#ffd592";
    case -1:
      return "#ffe5bb"; // handle value between -1 and -0.005
    case 0:
      return "#CCE9E7"; // handle value between 0.005 and 1
    case 1:
      return "#CCE9E7";
    case 2:
      return "#BFDDDB";
    case 3:
      return "#B6D4D2";
    case 4:
      return "#ABC9C7";
    case 5:
      return "#9AB9B7";
    case 6:
      return "#8CAEAB";
    case 7:
      return "#6D9693";
    default:
      return "#6D9693";
  }
};

export const convertThirdQualityToColor = (quality: number | null) => {
  if (Settings.darkTheme()) {
    if (quality === null) return "#B9B9B9";

    if (quality < 0.005 && quality > -0.005) return "white";

    switch (Math.max(Math.min(Math.floor(quality), 20), -1)) {
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
        return "B9B9B9";
    }
  }
  if (quality === null) return "#B9B9B9";

  if (quality < 0.005 && quality > -0.005) return "#45CBC7";

  switch (Math.max(Math.min(Math.floor(quality), 20), -1)) {
    case -1:
      return "#B9B9B9"; // handle value between -1 and -0.005
    case 0:
      return "#FFE5BB"; // handle value between 0.005 and 1
    case 1:
      return "#FFDCA3";
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
      return "#FF7A4C";
    case 9:
      return "#FF5E3B";
    case 10:
      return "#FF5335";
    case 11:
      return "#FF492E";
    case 12:
      return "#FF321F";
    case 13:
      return "#F93137";
    case 14:
      return "#F5314A";
    case 15:
      return "#F03060";
    case 16:
      return "#E9307D";
    case 17:
      return "#E23480";
    case 18:
      return "#D93884";
    case 19:
      return "#BB3176";
    case 20:
      return "#9D2A68";
    default:
      return "#B9B9B9";
  }
};
