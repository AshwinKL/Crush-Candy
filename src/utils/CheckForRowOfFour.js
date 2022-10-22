import blank from "../assets/blank.png";

export const CheckForRowOfFour = (
  currentColorArrangement,
  setScore,
  setTotalLife,
  totalLife,
  coinSound
) => {
  const notValid = [
    5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54,
    55, 62, 63, 64,
  ];
  for (let i = 0; i < 64; i++) {
    if (notValid.includes(i)) continue;
    const colorOfThree = [i, i + 1, i + 2, i + 3];
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
      setScore((prev) => prev + 4);
      coinSound();
      if (totalLife + 50 < 90) {
        setTotalLife((prev) => prev + 40);
      } else {
        const limit = 100 - totalLife;
        setTotalLife((prev) => prev + limit - 20);
      }
    }
  }
};
