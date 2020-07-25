import React from "react";
import useStyles from "./style";

function CreditsSection() {
  const classes = useStyles();
  return (
    <div className={classes.creditsSection}>
      <h2>Credits</h2>
      <h3>Idea & Design</h3>
      <p>
        <a href="https://www.senlin.space">Sen Lin</a>
      </p>
      <h3>Development</h3>
      <p>
        <a href="https://clement-liu.com">Clement Liu</a>
      </p>
      <h3>Image Support</h3>
      <p>
        <a href="https://www.jiweikneipe.me/">Jiwei</a>,{" "}
        <a href="https://www.ayundesign.com/">Matty</a>,{" "}
        <a href="https://www.mengtingwang.me/">Miantiao</a>,
        <a href="https://twfaces.com/">Things with Faces</a>
      </p>
    </div>
  );
}

export default CreditsSection;
