import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "35px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    fontSize: "1.2rem",
  },
  congratulations: {
    maxWidth: "300px",
    textAlign: "left",
    "& h1": {
      color: "gold",
      fontSize: "1.8rem",
    },
    "& p": {
      lineHeight: "1.6rem",
    },
  },
  btnContainner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "72px",
    cursor: "pointer",
  },
  btn: {
    padding: "10px 85px",
    backgroundColor: "white",
    color: "black",
    fontSize: "1.2rem",
    //   marginTop:"35px",
  },
  surveyQuestions: {},
  question: {
    backgroundColor: "#212121",
    padding: "16px",
    width: "268px",
    lineHeight: "1.6rem",
    margin: "1rem 0px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  btnStroke: {
    border: "2px solid white",
    margin: "0px 4px",
    padding: "2px 30px",
    cursor: "pointer",
  },
});

export default useStyles;
