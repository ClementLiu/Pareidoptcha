import React from "react";
import useStyles from "./style";
function SurveyQuestions(props) {
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
          <div className={classes.btnStroke}>Yep</div>
          <div className={classes.btnStroke}>Nope</div>
        </div>
      </div>
      <div className={classes.question}>
        <div className={classes.questionScript}>
          Do you believe this is a unique power owned by us human?
        </div>
        <div className={classes.btnContainer}>
          <div className={classes.btnStroke}>Yep</div>
          <div className={classes.btnStroke}>Nope</div>
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
