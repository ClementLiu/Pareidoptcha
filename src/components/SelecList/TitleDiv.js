import React, { memo } from "react";

import useStyle from "./style";

function TitleDiv({ title, isSubmited, isCorrect }) {
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
    </div>
  );
}

export default memo(TitleDiv);
