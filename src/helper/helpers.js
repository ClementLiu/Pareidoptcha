const sumObject = (obj) => {
  var sum = 0;
  for (var el in obj) {
    if (obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum;
};

const getLevelData = (pageState) => {
  const currentPageNumber = pageState.currentPageNum;
  let level;
  switch (true) {
    case currentPageNumber < pageState.levelNum.beginnerNum:
      level = 1;
      break;
    case currentPageNumber <
      pageState.levelNum.beginnerNum + pageState.levelNum.hardNum:
      level = 2;
      break;
    case currentPageNumber <
      pageState.levelNum.beginnerNum +
        pageState.levelNum.hardNum +
        pageState.levelNum.masterNum:
      level = 3;
      break;
    default:
      console.log("currentPageNumber", currentPageNumber);
      break;
  }

  let levelName;
  switch (level) {
    case 1:
      levelName = "Rookie";
      break;
    case 2:
      levelName = "Hard";
      break;
    case 3:
      levelName = "Master";
      break;

    default:
      console.log("level", level);

      break;
  }

  let currentNumInLevel = 0;
  switch (true) {
    case level < pageState.levelNum.beginnerNum:
      currentNumInLevel = currentPageNumber + 1;
      break;
    case level < pageState.levelNum.beginnerNum + pageState.levelNum.hardNum:
      currentNumInLevel =
        currentPageNumber + 1 - pageState.levelNum.beginnerNum;
      break;
    case level <
      pageState.levelNum.beginnerNum +
        pageState.levelNum.hardNum +
        pageState.levelNum.masterNum:
      currentNumInLevel =
        currentPageNumber +
        1 -
        pageState.levelNum.beginnerNum -
        pageState.levelNum.hardNum;
      break;
    default:
      console.log("currentNumInLevel", currentNumInLevel);
      break;
  }
  return { level, levelName, currentNumInLevel };
};

export { sumObject, getLevelData };
