import React from "react";
import useStyles from "./style";

function SurveyContainer(props) {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
}

export default SurveyContainer;
