import { makeStyles } from "@material-ui/core";

const color = "#F9D75F";
const useStyles = makeStyles({
  container: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  scoreBigroot: {
    display: "flex",
    justifyContent: "space-around",
  },
  score: {
    fontSize: "3.7rem",
    color: "white",
  },

  awardTitle: {
    fontSize: "2.8rem",
    color: "#F9D75F",
    marginTop: "99px",
  },

  averageRoot: {
    position: "relative",
    marginTop: "140px",
    fontSize: "2rem",
    color: "white",
  },
  scoreBarMask: {
    zIndex: 1,
    backgroundColor: "black",
    width: "100%",
    maxWidth: "282px",
    color: "white",
    height: "20px",
    borderRadius: "70px",
    position: "relative",
    overflow: "hidden",
    clipPath: "border-box",
  },
  scoreBarBox: (props) => ({
    zIndex: -1,
    width: `${props.meter}`,
    backgroundColor: color,
    position: "absolute",
    height: "100%",
    left: 0,
    top: 0,
    transition: "width .5s ease-in-out",
  }),
  defaultBarBox: (props) => ({
    zIndex: -2,
    width: `${props.defaultMeter}`,
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    left: 0,
    top: 0,
    transition: "width .5s ease-in-out",
  }),
  /* .makeStyles-average-19::before */
  average: (props) => ({
    transition: "all 1s",
    zIndex: "3",
    position: "absolute",
    bottom: "-50px",
    left: props.defaultMeter,
    transform: "translateX(-50%)",
    "&:before": {
      content: "''",
      zIndex: "5",
      top: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: `16px solid ${color}`,
    },
  }),
  your: (props) => ({
    transition: "all 1s",
    zIndex: "3",
    color: color,
    position: "absolute",
    top: "-50px",
    left: props.meter,
    transform: "translateX(-50%) translateY(-50%)",
    "&:before": {
      content: "''",
      zIndex: "5",
      bottom: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: `16px solid ${color}`,
    },
  }),
});

export default useStyles;
