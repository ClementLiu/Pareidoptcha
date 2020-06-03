import React, { useContext } from "react";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "./contexts/Queries.context";

export default function ResultPage() {
  // const { imgLists, backToTest } = useContext(ImagesContext);
  const pageState = useContext(PageContext);
  const pageDispatch = useContext(PageDispatchContext);
  const imageLists = useContext(ImagesContext);

  // let checkPoints = ["0-5", "0-6", "0-9", "0-10"];
  // let checkNum = checkPoints.length;
  let isCheckted = false;
  imageLists.forEach((imgList, i) => {
    console.log("pageState.currentPageNum", pageState.currentPageNum);
    console.log("i", i);
    if (i === pageState.currentPageNum) {
      const { imageParts } = imgList;
      const selectedLable = imageParts
        .filter((imagePart) => (imagePart.selected === false ? false : true))
        .map((imagePart) => imagePart.label);
      console.log("selectedLable", selectedLable);

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
          pageDispatch({ type: "BACK" });
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          pageDispatch({ type: "NEXTPAGE" });
        }}
      >
        Next
      </button>
    </div>
  );
  const bot = (
    <div>
      <h2>Are you a bot?</h2>
      <img src={require("./robot-dance.gif")} alt="robot"></img>

      <p>
        01110100 01101111 01000010 01101001 01101110 01100001 01110010 01111001
      </p>
      <button
        onClick={() => {
          pageDispatch({ type: "BACK" });
        }}
      >
        Try Again?
      </button>
    </div>
  );

  return <div>{isCheckted ? human : bot}</div>;
}
