import React, { useContext } from "react";
import { QueriesContext } from "./contexts/Queries.context";

export default function ResultPage() {
  // const { imgLists, backToTest } = useContext(QueriesContext);
  const { pageState, pageDispatch, imageLists } = useContext(QueriesContext);
  // let checkPoints = ["0-5", "0-6", "0-9", "0-10"];
  // let checkNum = checkPoints.length;
  let isCheckted = false;
  imageLists.forEach((imgList, i) => {
    console.log("pageState.currentPageNum", pageState.currentPageNum);
    console.log("i", i);
    if (i === pageState.currentPageNum) {
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
      if (
        JSON.stringify(selectedLable) === JSON.stringify(imgList.checkPoints)
      ) {
        console.log("truetruetrue");

        isCheckted = true;
      } else {
        console.log("falsefalse");
        isCheckted = false;
      }
    }
  });

  console.log("isCheckted", isCheckted);
  const human = (
    <div>
      <h2>You made it!</h2>

      <img src={require("./human.gif")} alt="robot"></img>
      <p>What a lovely soul here!</p>
      <button
        onClick={() => {
          pageDispatch({ type: "REST" });
        }}
      >
        Back
      </button>
    </div>
  );
  const bot = (
    <div>
      <h2>Are you a bot?</h2>
      {/* <img
        src={
          "https://media3.giphy.com/media/eJRGS4gLo4nvD4NAzc/200w.webp?cid=ecf05e4754dd1f4e9b1192d7a90f56493c8c15d3f620d330&rid=200w.webp"
        }
        alt="bot"
      ></img> */}
      <img src={require("./robot-dance.gif")} alt="robot"></img>

      <p>
        01110100 01101111 01000010 01101001 01101110 01100001 01110010 01111001
      </p>
      <button
        onClick={() => {
          pageDispatch({ type: "REST" });
        }}
      >
        Back
      </button>
    </div>
  );

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

  return <div>{isCheckted ? human : bot}</div>;
}
