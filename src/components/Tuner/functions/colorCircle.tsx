export const convertFifthQualityToColor = (quality: number|null) => {
  if (quality !== null) {
    switch (Math.max(Math.min(Math.floor(quality),7),-12)) {
      case -12:
        return "#4F0000";
      case -11 :
        return "#7B0000";
      case -10 :
        return "#AE0000";
      case -9 : 
        return "#E00000";
      case -8 : 
        return "#FF0D08";
      case -7 : 
        return "#FF321F";
      case -6 : 
        return "#FF5435";
      case -5 : 
        return "#FF764A";
      case -4 : 
        return "#FF9960";
      case -3 : 
        return "#FFBB75";
      case -2 : 
        return "#FFD592";
      case -1 : 
        return "#FFE5BB";
      case 0 : 
        return "#45CBC7";
      case 1 : 
        return "#B9B9B9";
      case 2 : 
        return "#9F9F9F";
      case 3 : 
        return "#7E7E7E";
      case 4 : 
        return "#666666";
      case 5 : 
        return "#4D4D4D";
      case 6 : 
        return "#333333";
      case 7 : 
        return "#161616";
      default:
        return "#161616";
    }
  } else {
    return "#161616";
  }
}

export const convertThirdQualityToColor = (quality: number|null) => {
  if (quality !== null) {
    switch (Math.max(Math.min(Math.floor(quality),20),-1)) {
      case -1:
        return "#B9B9B9";
      case 0 :
        return "#45CBC7";
      case 1 :
        return "#FFEDD0";
      case 2 : 
        return "#FFE9C6";
      case 3 : 
        return "#FFE5BC";
      case 4 : 
        return "#FFE1B1";
      case 5 : 
        return "#FFDDA7";
      case 6 : 
        return "#FFDA9E";
      case 7 : 
        return "#FFD694";
      case 8 : 
        return "#FFD289";
      case 9 : 
        return "#FFC77D";
      case 10 : 
        return "#FFA669";
      case 11 : 
        return "#FF8654";
      case 12 : 
        return "#FF6741";
      case 13 : 
        return "#FF472D";
      case 14 : 
        return "#FF2416";
      case 15 : 
        return "#FF0604";
      case 16 : 
        return "#EB0000";
      case 17 : 
        return "#D40000";
      case 18 : 
        return "#BC0000";
      case 19 : 
        return "#A60000";
      case 20 : 
        return "#8A0000";
      default:
        return "#B9B9B9";
    }
  } else {
    return "#B9B9B9";
  }
}