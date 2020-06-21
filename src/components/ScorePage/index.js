import React from "react";
import ScoreContainer from "./ScoreContainer";
import ScoreBig from "./ScoreBig";
import Title from "./Title";
import Average from "./Average";
import AwardTitle from "./AwardTitle";

function index(props) {
  return (
    <ScoreContainer>
      <Title>I AM NOT A ROBOT</Title>
      <ScoreBig>{props.score}</ScoreBig>
      <Average score={props.score} scoreSum={props.scoreSum}></Average>
      <AwardTitle></AwardTitle>
    </ScoreContainer>
  );
}

export default index;
