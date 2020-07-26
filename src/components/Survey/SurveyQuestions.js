import React, { useState } from "react";
import useStyles from "./style";
import SimpleBtn from "./SimpleBtn";

function SurveyQuestions(props) {
  const [faceBefore, faceBeforeSet] = useState({
    isAnswered: false,
    firstSelected: false,
    secondirstSelected: false,
  });
  const [facePower, facePowerSet] = useState({
    isAnswered: false,
    firstSelected: false,
    secondirstSelected: false,
  });
  const onClick = () => {
    props.setResult(true);
  };
  const classes = useStyles();
  return (
    <div className={classes.surveyQuestions}>
      <div className={classes.question}>
        <div className={classes.questionScript}>
          Have you ever recognize these “faces” in your life ?
        </div>
        <div className={classes.btnContainer}>
          <SimpleBtn
            isAnswered={faceBefore.isAnswered}
            isSelected={faceBefore.firstSelected}
            // onClick={beforeOnClickFirst}
            onClick={() => {
              faceBeforeSet({
                isAnswered: true,
                firstSelected: true,
                secondirstSelected: false,
              });
            }}
          >
            Yep
          </SimpleBtn>
          <SimpleBtn
            isAnswered={faceBefore.isAnswered}
            isSelected={faceBefore.secondirstSelected}
            onClick={() => {
              faceBeforeSet({
                isAnswered: true,
                firstSelected: false,
                secondirstSelected: true,
              });
            }}
          >
            Nope
          </SimpleBtn>
        </div>
      </div>
      <div className={classes.question}>
        <div className={classes.questionScript}>
          Do you believe this is a unique power owned by us human?
        </div>
        <div className={classes.btnContainer}>
          <SimpleBtn
            isAnswered={facePower.isAnswered}
            isSelected={facePower.firstSelected}
            // onClick={beforeOnClickFirst}
            onClick={() => {
              facePowerSet({
                isAnswered: true,
                firstSelected: true,
                secondirstSelected: false,
              });
            }}
          >
            Yep
          </SimpleBtn>
          <SimpleBtn
            isAnswered={facePower.isAnswered}
            isSelected={facePower.secondirstSelected}
            onClick={() => {
              facePowerSet({
                isAnswered: true,
                firstSelected: false,
                secondirstSelected: true,
              });
            }}
          >
            Nope
          </SimpleBtn>
        </div>
      </div>
      <div className={classes.btnContainner}>
        <div className={classes.btn} onClick={onClick}>
          Show My Results
        </div>
      </div>
    </div>
  );
}

export default SurveyQuestions;
