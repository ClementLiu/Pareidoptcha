import React from "react";
import useStyles from "./style";

function Congratulation(props) {
  const awardScript = (awardNum) => {
    switch (awardNum) {
      case 1:
        return "Ha! You are quite good at recognizing abstract “faces”, enjoy this as your daily fun! ";
      case 2:
        return "Hmm, looks like you just picked up this new skill! No worries, train it more in your daily life :)";
      case 3:
        return "Wow! You are very talented in discovering abstract “faces”, celebrate it with people around!";
      default:
        return "Ha! You are quite good at recognizing abstract “faces”, enjoy this as your daily fun! ";
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.congratulation}>
      <div className={classes.congratulationScript}>
        {awardScript(props.awardLevel)}
      </div>
      <div className={classes.imgContainer}>
        <img
          className={classes.awardAvatar}
          src={require("./assets/awardAvatar.svg")}
          alt="awardAvatar"
        ></img>
      </div>
      <hr className={classes.seperateLine} />

      <div className={classes.techIssue}>
        <p>
          You can scan the QR Code and follow this account to get more future
          update.
        </p>
        <img
          className={classes.qrcode}
          src={require("./assets/qr.png")}
          alt="qr_code"
        ></img>
      </div>
    </div>
  );
}

export default Congratulation;
