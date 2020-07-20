import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  selectList: {
    minWidth: "391px",
    padding: "8px",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: " 280px",
    padding: "8px",
    backgroundColor: " white",
  },
  resultState: {
    position: "absolute",
    left: 0,
    margin: "auto",
    top: "-24px",
    right: 0,
    animation: "$resultState-pop 250ms ease-out",
  },
  "@keyframes resultState-pop": {
    "0%": {
      transform: "translateY(12px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  title: {
    width: "auto",
    textAlign: "left",
    padding: "9px 6px 12px 16px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "8px",
    position: "relative",
  },
  countDown: {},
  caption: {
    display: " block",
    fontStyle: " normal",
    fontWeight: " 500",
    fontSize: " 1rem",
    lineHeight: " 22px",
    color: " #ffffff",
  },
  head: {
    display: " block",
    fontStyle: " normal",
    fontWeight: " 600",
    fontSize: " 1.9rem",
    letterSpacing: "0.1rem",
    lineHeight: " 39px",
    color: " #ffffff",
    textTransform: "uppercase",
  },
  timeDiv: {
    position: "absolute",
    width: "59px",
    right: "4px",
    top: "7px",
    fontSize: "2rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  timeTemp: {
    width: "35px",
  },
  answerBtn: {
    color: theme.palette.primary.main,
  },
  btnOutline: {},
  imageParts: {
    display: " flex",
    flexWrap: " wrap",
    width: " 100%",
    // width: " 392px",
    marginBottom: " 8px",
    position: "relative",
  },
  draw: {
    position: "absolute",
    width: "100%",
    zIndex: "5",
  },
  footer: {},
  controls: {
    display: " flex",
    justifyContent: " space-between",
  },
}));

export default useStyle;
