import { isDarkTheme } from "../model/Utils";

export const convertFifthQualityToColor = (quality: number | null) => {
  if (isDarkTheme()) {
    if (quality === null) return "grey";

    if (quality < 0.005 && quality > -0.005) return "white";

    switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
      case -12:
        return "#823B8F";
      case -11:
        return "#914393";
      case -10:
        return "#9A4996";
      case -9:
        return "#A24F99";
      case -8:
        return "#A85DA0";
      case -7:
        return "#AD6AA8";
      case -6:
        return "#B47BB1";
      case -5:
        return "#BB8ABA";
      case -4:
        return "#C39CC4";
      case -3:
        return "#CBABCD";
      case -2:
        return "#D4BCD5";
      case -1:
        return "#DCCBDD"; // handle value between -1 and -0.005
      case 0:
        return "#FFFFFF"; // handle value between 0.005 and 1
      case 1:
        return "#9CD4D9";
      case 2:
        return "#77C7C7";
      case 3:
        return "#6FC3B9";
      case 4:
        return "#66BFAB";
      case 5:
        return "#5BBA99";
      case 6:
        return "#4DB485";
      case 7:
        return "#41B074";
      default:
        return "#DCCBDD";
    }
  }

  if (quality === null) return "#161616";

  if (quality < 0.005 && quality > -0.005) return "#45CBC7";

  switch (Math.max(Math.min(Math.floor(quality), 7), -12)) {
    case -12:
      return "#4F0000";
    case -11:
      return "#7B0000";
    case -10:
      return "#AE0000";
    case -9:
      return "#E00000";
    case -8:
      return "#FF0D08";
    case -7:
      return "#FF321F";
    case -6:
      return "#FF5435";
    case -5:
      return "#FF764A";
    case -4:
      return "#FF9960";
    case -3:
      return "#FFBB75";
    case -2:
      return "#FFD592";
    case -1:
      return "#FFE5BB"; // handle value between -1 and -0.005
    case 0:
      return "#B9B9B9"; // handle value between 0.005 and 1
    case 1:
      return "#B9B9B9";
    case 2:
      return "#9F9F9F";
    case 3:
      return "#7E7E7E";
    case 4:
      return "#666666";
    case 5:
      return "#4D4D4D";
    case 6:
      return "#333333";
    case 7:
      return "#161616";
    default:
      return "#161616";
  }
};

export const convertThirdQualityToColor = (quality: number | null) => {
  if (isDarkTheme()) {
    if (quality === null) return "grey";

    if (quality < 0.005 && quality > -0.005) return "white";

    switch (Math.max(Math.min(Math.floor(quality), 20), -1)) {
      case -1:
        return "grey"; // handle value between -1 and -0.005
      case 0:
        return "#FFFFFF"; // handle value between 0.005 and 1
      case 1:
        return "#D98FD7";
      case 2:
        return "#D1A5C8";
      case 3:
        return "#CA87B7";
      case 4:
        return "#C46CA7";
      case 5:
        return "#AD6AA8";
      case 6:
        return "#BF549A";
      case 7:
        return "#B54995";
      case 8:
        return "#B04693";
      case 9:
        return "#AA4392";
      case 10:
        return "#A64090";
      case 11:
        return "#9F3F90";
      case 12:
        return "#983F90";
      case 13:
        return "#913F90";
      case 14:
        return "#883E90";
      case 15:
        return "#813D90";
      case 16:
        return "#7D3D90";
      case 17:
        return "#793C8F";
      case 18:
        return "#743C8F";
      case 19:
        return "#6D3B8F";
      case 20:
        return "#632D8E";
      default:
        return "grey";
    }
  }
  if (quality === null) return "#B9B9B9";

  if (quality < 0.005 && quality > -0.005) return "#45CBC7";

  switch (Math.max(Math.min(Math.floor(quality), 20), -1)) {
    case -1:
      return "#B9B9B9"; // handle value between -1 and -0.005
    case 0:
      return "#FFEDD0"; // handle value between 0.005 and 1
    case 1:
      return "#FFEDD0";
    case 2:
      return "#FFE9C6";
    case 3:
      return "#FFE5BC";
    case 4:
      return "#FFE1B1";
    case 5:
      return "#FFDDA7";
    case 6:
      return "#FFDA9E";
    case 7:
      return "#FFD694";
    case 8:
      return "#FFD289";
    case 9:
      return "#FFC77D";
    case 10:
      return "#FFA669";
    case 11:
      return "#FF8654";
    case 12:
      return "#FF6741";
    case 13:
      return "#FF472D";
    case 14:
      return "#FF2416";
    case 15:
      return "#FF0604";
    case 16:
      return "#EB0000";
    case 17:
      return "#D40000";
    case 18:
      return "#BC0000";
    case 19:
      return "#A60000";
    case 20:
      return "#8A0000";
    default:
      return "#B9B9B9";
  }
};
