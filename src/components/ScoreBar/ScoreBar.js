import React from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
  },
  scoreBarMask: {
    zIndex: 1,
    backgroundColor: "black",
    width: "100%",
    maxWidth: "580px",
    color: "white",
    fontSize: "1.2rem",
    padding: "12px",
    borderRadius: "70px",
    position: "relative",
    overflow: "hidden",
    clipPath: "border-box",
  },
  scoreBarBox: (props) => ({
    zIndex: -1,
    width: `${props.meter}`,
    backgroundColor: props.color,
    position: "absolute",
    height: "100%",
    left: 0,
    top: 0,
    transition: "width .5s ease-in-out",
    /*     "&:before": {
      content: "''",
      zIndex: -1,
      position: "absolute",
      height: "100%",
      overflow: "hidden",
      width: props.meter,
      backgroundColor: props.color,
      left: 0,
      top: 0,
      borderRadius: "70px",
      transition: "width .5s ease-in-out",
    }, */
  }),
});
/* const ScoreBarContainer = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "35px",
}));
const ScoreBarBox = styled("div")((props) => ({
  backgroundColor: "black",
  position: "relative",
  zIndex: -2,
  width: "100%",
  maxWidth: "580px",
  color: "white",
  fontSize: "1.2rem",
  padding: "12px",
  borderRadius: "70px",
  "&:before": {
    content: "''",
    zIndex: -1,
    position: "absolute",
    height: "100%",
    overflow: "hidden",
    width: props.meter,
    backgroundColor: props.color,
    left: 0,
    top: 0,
    borderRadius: "70px",
    transition: "width .5s ease-in-out",
  },
})); */

function ScoreBar(props) {
  const theme = useTheme();
  const classes = useStyles({
    color: theme.palette.primary.main,
    meter: `${(props.answeredNum / props.questionsNum) * 100}%`,
  });
  return (
    <div className={classes.root}>
      <div className={classes.scoreBarMask}>
        {props.level} {props.answeredNum} of {props.questionsNum}
        <div className={classes.scoreBarBox}></div>
      </div>
    </div>
  );
}

export default ScoreBar;
