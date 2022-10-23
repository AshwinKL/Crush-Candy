import blank from "../assets/blank.png";
export const CheckForColumnOfThree = (
  width,
  currentColorArrangement,
  setScore,
  setTotalLife,
  totalLife,
  coinSound
) => {
  for (let i = 0; i < 48; i++) {
    const colorOfThree = [i, i + width, i + width * 2];
    const decidedColor = currentColorArrangement[i];
    if (
      colorOfThree.every(
        (square) => currentColorArrangement[square] === decidedColor
      ) &&
      decidedColor !== blank
    ) {
      colorOfThree.forEach(
        (square) => (currentColorArrangement[square] = blank)
      );
      setScore((prev) => prev + 3);
      coinSound();
      if (totalLife + 40 < 90) {
        setTotalLife((prev) => prev + 30);
      } else {
        const limit = 100 - totalLife;

        setTotalLife((prev) => prev + limit);
      }
    }
  }
};
