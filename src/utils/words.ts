// not used right now, but could be useful later on
export const shouldBreak = (word: string, length: number) => {
  if (word.length >= length) {
    const letters = word.split('');
    const middle = Math.floor(letters.length / 2);
    const firstPart = letters.slice(0, middle);
    const secondPart = letters.slice(middle, letters.length);
    const spaceLeft = firstPart.reverse().findIndex(c => c === ' ');
    const spaceRight = secondPart.reverse().findIndex(c => c === ' ');
    let cutIndex = 0;
    if (spaceLeft === -1 && spaceRight === -1) {
      return word;
    }
    if (spaceLeft === -1 && spaceRight !== -1) {
      cutIndex = middle + spaceRight;
    } else if (spaceLeft !== -1 && spaceRight === -1) {
      cutIndex = middle - spaceLeft;
    } else if (spaceLeft <= spaceRight) {
      cutIndex = middle + spaceRight;
    } else if (spaceLeft > spaceRight) {
      cutIndex = middle - spaceLeft;
    }
    return [...letters.slice(0, cutIndex), '<br>', ...letters.slice(cutIndex + 1, letters.length)].join('');
  }
  return word;
}