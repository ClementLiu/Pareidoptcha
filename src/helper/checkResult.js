const checkResult = (currentImageList) => {
  let answerCheck = false;
  const { imageParts } = currentImageList;
  const selectedLable = imageParts
    .filter((imagePart) => (imagePart.selected === false ? false : true))
    .map((imagePart) => imagePart.label);
  console.log("selectedLable", selectedLable);
  if (
    JSON.stringify(selectedLable) ===
    JSON.stringify(currentImageList.checkPoints)
  ) {
    console.log("truetruetrue");

    answerCheck = true;
  } else {
    console.log("falsefalse");
    answerCheck = false;
  }
  return answerCheck;
};

export default checkResult;
