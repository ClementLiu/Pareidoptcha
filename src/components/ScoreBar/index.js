import React from "react";
import ScoreBar from "./ScoreBar";
import { styled } from "@material-ui/core/styles";

const ScoreBarFoot = styled("div")({
  marginTop: "35px",
});

function index(props) {
  return (
    <ScoreBarFoot>
      <ScoreBar
        questionsNum={props.questionsNum}
        answeredNum={props.answeredNum}
      >
        ScoreBar
      </ScoreBar>
    </ScoreBarFoot>
  );
}

export default index;
