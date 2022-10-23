export const DragStart = (e, setSquareBeingDragged) => {
  console.log(e.target);
  setSquareBeingDragged(e.target);
};
export const DragDrop = (e, setSquareBeingReplaced) => {
  console.log(e.target);
  setSquareBeingReplaced(e.target);
};
export const DragEnd = (
  e,
  squareBeingDragged,
  squareBeingReplaced,
  currentColorArrangement,
  width
) => {
  console.log(e.target);
  const squareBeingDraggedId = parseInt(
    squareBeingDragged.getAttribute("data-id")
  );
  const squareBeingReplacedId = parseInt(
    squareBeingReplaced.getAttribute("data-id")
  );

  const validMoves = [
    squareBeingDraggedId + 1,
    squareBeingDraggedId - 1,
    squareBeingDraggedId + width,
    squareBeingDraggedId - width,
  ];
  const validMove = validMoves.includes(squareBeingReplacedId);

  if (validMove) {
    currentColorArrangement[squareBeingDraggedId] =
      squareBeingReplaced.getAttribute("src");

    currentColorArrangement[squareBeingReplacedId] =
      squareBeingDragged.getAttribute("src");
  }
};
