import React from "react";
import useStyles from "./style";

const padToFour = (number) =>
  number <= 9999 ? `000${number}`.slice(-4) : number;

function ScoreBig(props) {
  const classes = useStyles();
  return (
    <div className={classes.scoreBigroot}>
      <img src={require("./assets/score-big.svg")} alt="score-big"></img>
      <div className={classes.score}>{padToFour(props.children)}</div>
    </div>
  );
}

export default ScoreBig;
