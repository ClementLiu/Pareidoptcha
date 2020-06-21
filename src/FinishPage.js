import React from "react";
import ScorePage from "components/ScorePage";

export default function FinishPage(props) {
  return (
    <div>
      <ScorePage score={props.score} scoreSum={props.scoreSum}></ScorePage>
    </div>
  );
}
