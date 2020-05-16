export default function compare(questionsList, froma, tob) {
  let catalog = false;
  questionsList.questions.forEach((question) => {
    const { label, selected } = question;
    // const label = "1-1";
    if (selected) {
      let [, b] = label.split("-");
      if ((b >= froma) & (b <= tob)) {
        catalog = true;
      }
    }
  });

  return catalog;
}
