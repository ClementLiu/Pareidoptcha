import React from "react";
import useStyles from "./style";

function ScoreContainer(props) {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
}

export default ScoreContainer;
