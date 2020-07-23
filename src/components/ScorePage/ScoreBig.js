import React from "react";
import useStyles from "./style";

const padToFour = (number) =>
  number <= 9999 ? `000${number}`.slice(-4) : number;

function ScoreBig(props) {
  const badgeName = (num) => {
    switch (num) {
      case 1:
        return "Rookie";
      case 2:
        return "Senior";
      case 3:
        return "Master";

      default:
        return "unknown";
    }
  };
  const badgeColor = (num) => {
    switch (num) {
      case 1:
        return "#2950FB";
      case 2:
        return "#A35FF9";
      case 3:
        return "#E92985";

      default:
        return "#2950FB";
    }
  };
  const classes = useStyles({
    badgecolor: badgeColor(props.badge),
  });
  console.log(badgeColor(props.badge));
  return (
    <div className={classes.scoreBigroot}>
      <div>
        <img src={require("./assets/score-big.svg")} alt="score-big"></img>
        <div className={classes.levelBadge}>Rookie</div>
      </div>
      <div>
        <div className={classes.score}>{padToFour(props.children)}</div>
        <div className={classes.faceDreamer}>Face Daydreamer</div>
      </div>
    </div>
  );
}

export default ScoreBig;
