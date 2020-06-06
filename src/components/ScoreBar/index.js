import React from "react";
import ScoreBar from "./ScoreBar";

function index(props) {
  return (
    <div>
      <ScoreBar
        questionsNum={props.questionsNum}
        answeredNum={props.answeredNum}
        level={props.level}
      ></ScoreBar>
    </div>
  );
}

export default index;
