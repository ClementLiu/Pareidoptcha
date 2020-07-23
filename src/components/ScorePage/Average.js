import React from "react";
import useStyles from "./style";

function Average(props) {
  const classes = useStyles({
    meter: `${(props.score / props.scoreSum) * 100}%`,
    defaultMeter: "70%",
    //   meter: `${(props.answeredNum / props.questionsNum) * 100}%`,
  });

  return (
    <div className={classes.averageRoot}>
      <div className={classes.average}>Average</div>
      <div className={classes.your}>Your Score</div>
      <div className={classes.scoreBarMask}>
        <div className={classes.scoreBarBox}></div>
        <div className={classes.defaultBarBox}></div>
      </div>
    </div>
  );
}

export default Average;
