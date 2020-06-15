import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  selectOption: {
    width: "68px",
    height: "68px",
    padding: "1px",
    position: "relative",
    "& img": {
      width: "100%",
      transition: "transform 0.1s ease-in-out",
    },
  },
  selected: {
    "& img": {
      transform: "scale(0.8, 0.8)",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "16px",
      height: "16px",
      top: "3px",
      left: "4px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "9px",
      zIndex: "2",
    },
  },
  faIcon: {
    position: "absolute",
    top: "5px",
    left: "6px",
    margin: "auto",
    zIndex: "3",
    fontSize: "12px",
  },
}));
export default useStyle;
