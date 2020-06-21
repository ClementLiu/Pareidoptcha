import React from "react";
import useStyles from "./style";

function AwardTitle() {
  const classes = useStyles();
  return (
    <div className={classes.awardTitle}>
      BIONIC MAN
      <span role="img" aria-label="robot face">
        🤖
      </span>
    </div>
  );
}

export default AwardTitle;
