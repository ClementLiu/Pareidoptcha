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
  },
  title: {
    width: "auto",
    textAlign: "left",
    padding: "6px 6px 12px 16px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "8px",
    position: "relative",
  },
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
  },
  footer: {},
  controls: {
    display: " flex",
    justifyContent: " space-between",
  },
}));

export default useStyle;
