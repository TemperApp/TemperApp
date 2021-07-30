export const lightenDarkenColor = (col: string, amt: number, fallback: string) => {
  const str = col.match(/^#?(.{6})$/);
  if (!str) {
    return fallback;
  }
  const num = parseInt(str[1], 16);
  const r = (num >> 16) + amt;
  const b = ((num >> 8) & 0x00FF) + amt;
  const g = (num & 0x0000FF) + amt;
  return '#' + (g | (b << 8) | (r << 16)).toString(16);
};
