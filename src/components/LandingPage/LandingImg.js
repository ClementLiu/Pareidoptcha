import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "35px",
    maxWidth: " 480px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btnContainner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "72px",
  },
  btn: {
    padding: "10px 70px",
    backgroundColor: "white",
    color: "black",
    fontSize: "1.2rem",
    //   marginTop:"35px",
  },
});

function LandingImg() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={require("./assets/landingpageimg.svg")}
        alt="landingpageimg"
      ></img>

      <Link to="./recaptcha" className={classes.btnContainner}>
        <div className={classes.btn}>Press to Start</div>
      </Link>
    </div>
  );
}

export default LandingImg;
