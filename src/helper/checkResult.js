const checkResult = (currentImageList) => {
  let answerCheck = false;
  const { imageParts } = currentImageList;
  const selectedLable = imageParts
    .filter((imagePart) => (imagePart.selected === false ? false : true))
    .map((imagePart) => imagePart.label);
  if (
    JSON.stringify(selectedLable) ===
    JSON.stringify(currentImageList.checkPoints)
  ) {
    answerCheck = true;
  } else {
    answerCheck = false;
  }
  return answerCheck;
};

export default checkResult;
