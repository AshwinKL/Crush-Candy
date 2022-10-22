import blank from "../assets/blank.png";

export const MoveIntoSquareBelow = (
  width,
  currentColorArrangement,
  candyColors,
  rollSound
) => {
  const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < 64 - width; i++) {
    if (firstRow.includes(i)) {
      if (
        currentColorArrangement[i] === blank ||
        currentColorArrangement[i] === undefined
      ) {
        const randomNumber = Math.floor(Math.random() * width);
        currentColorArrangement[i] = candyColors[randomNumber];
      }
    }

    if (
      currentColorArrangement[i + width] === blank ||
      currentColorArrangement[i + width] === undefined
    ) {
      rollSound();
      currentColorArrangement[i + width] = currentColorArrangement[i];
      currentColorArrangement[i] = blank;
    }
  }
};
