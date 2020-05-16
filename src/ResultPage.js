import React, { useContext } from "react";
import { QueriesContext } from "./contexts/Queries.context";

export default function ResultPage() {
  const { imgLists, backToTest } = useContext(QueriesContext);
  let checkPoints = ["0-1", "0-4", "0-7"];
  let checkNum = checkPoints.length;
  let isCheckted = false;
  const selectedLable = imgLists.map((imgList, i) => {
    const { imageParts } = imgList;
    const selectedLable = imageParts
      .filter((imagePart) => {
        if (imagePart.selected === false) {
          return false;
        }
        return true;
      })
      .map((imagePart) => {
        return imagePart.label;
      });
    console.log("selectedLable", selectedLable);
    if (JSON.stringify(selectedLable) === JSON.stringify(checkPoints)) {
      isCheckted = true;
    }
    console.log("isCheckted", isCheckted);
  });

  // const { questionsLists, backToTest } = useContext(QueriesContext);
  // const results = questionsLists.map((questionsList, i) => {
  //   const { title, questions } = questionsList;
  //   const questionsContent = questions.map((question, i) => (
  //     <div key={i}>
  //       <p>{`${question.task} is ${question.selected}`}</p>
  //     </div>
  //   ));
  //   return (
  //     <div key={i}>
  //       <h4>{title}</h4>
  //       {questionsContent}
  //     </div>
  //   );
  // });

  return (
    <div>
      {/* <h2>Your result:</h2>
      {results}
      <button onClick={backToTest}>Back</button> */}
      <h2>Done</h2>
      {isCheckted ? <h2>You are human </h2> : <h2>Please be smart </h2>}
      <button onClick={backToTest}>Back</button>
    </div>
  );
}
