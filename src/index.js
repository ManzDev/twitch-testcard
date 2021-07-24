const testcardContainer = document.querySelector(".testcard-container");
const testcard = document.querySelector(".testcard");

const addCell = (cellNumber) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  const isTopCell = (cellNumber > 0 && cellNumber < 19);
  const isBottomCell = (cellNumber > 300 && cellNumber < 319);
  const isInvertCell = cellNumber % 2 === 0;

  if (isTopCell) {
    cell.classList.add("top");
    isInvertCell && cell.classList.add("invert");
  }
  if (isBottomCell) {
    cell.classList.add("bottom");
    isInvertCell && cell.classList.add("invert");
  }

  const isLeftCell = (cellNumber % 20 === 0);
  const isRightCell = (cellNumber % 20 === 19);
  const isInvertLeftCell = cellNumber % 40 === 0;
  const isInvertRightCell = cellNumber % 40 === 39;

  if (isLeftCell) {
    cell.classList.add("left");
    isInvertLeftCell && cell.classList.add("invert");
  }
  if (isRightCell) {
    cell.classList.add("right");
    isInvertRightCell && cell.classList.add("invert");
  }

  testcard.appendChild(cell);
};

for (let i = 0; i < 320; i++) {
  addCell(i);
}

testcardContainer.style.setProperty("--height", `${innerHeight - 100}px`);
