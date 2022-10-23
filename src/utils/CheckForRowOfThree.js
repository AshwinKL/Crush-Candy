import blank from "../assets/blank.png";

export const CheckForRowOfThree = (
  currentColorArrangement,
  setScore,
  setTotalLife,
  totalLife,
  coinSound
) => {
  const notValid = [
    6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
  ];
  for (let i = 0; i < 64; i++) {
    if (notValid.includes(i)) continue;

    const colorOfThree = [i, i + 1, i + 2];
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
