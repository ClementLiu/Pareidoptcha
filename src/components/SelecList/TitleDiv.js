import React, { memo } from "react";

import useStyle from "./style";
const padToTwo = (number) => (number <= 99 ? `0${number}`.slice(-2) : number);

function TitleDiv({ title, timeTemp, isSubmited, isCorrect }) {
  const classes = useStyle();
  return (
    <div className={classes.title}>
      {isSubmited ? (
        isCorrect ? (
          <img
            className={classes.resultState}
            src={require("./assets/resultCorrect.svg")}
            alt="resultCorrect"
          />
        ) : (
          <img
            className={classes.resultState}
            src={require("./assets/resultWrong.svg")}
            alt="resultCorrect"
          />
        )
      ) : null}

      <span className={classes.caption}>Select all squares with</span>
      <span className={classes.head}>{title}</span>
      {!isSubmited ? (
        <div className={classes.timeDiv}>
          <img
            className={classes.timerClock}
            src={require("./assets/timerClock.svg")}
            alt="timerClock"
          />
          <span className={classes.timeTemp}>{padToTwo(timeTemp)}</span>
        </div>
      ) : null}
    </div>
  );
}

export default memo(TitleDiv);
