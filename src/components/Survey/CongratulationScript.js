import React from "react";
import useStyles from "./style";
function CongratulationScript() {
  const classes = useStyles();
  return (
    <div className={classes.congratulations}>
      <h1>Congratulations!</h1>
      <p>You have finished. Before showing your results, I'm curious that...</p>
    </div>
  );
}

export default CongratulationScript;
