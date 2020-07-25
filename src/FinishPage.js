import React, { useState } from "react";
import Survey from "components/Survey";
import ScorePage from "components/ScorePage";

export default function FinishPage(props) {
  const [isResult, setResult] = useState(false);
  return (
    <div>
      {isResult ? (
        <ScorePage score={props.score} scoreSum={props.scoreSum}></ScorePage>
      ) : (
        <Survey setResult={setResult}></Survey>
      )}
      {/* <Survey></Survey> */}
      {/* <ScorePage score={props.score} scoreSum={props.scoreSum}></ScorePage> */}
    </div>
  );
}
