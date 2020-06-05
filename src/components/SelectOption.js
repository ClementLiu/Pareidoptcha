import React, { useContext, memo } from "react";
import { ImagesDispatchContext } from "contexts/Queries.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

// ? what if I want to use one props control multi attr? is there a props => props && css
// ! it worked
// ? we don't need to have individual class style for each image. They can share
const useStyle = makeStyles((theme) => ({
  selectOption: {
    width: "96px",
    height: "96px",
    padding: "1px",
    position: "relative",
    "& img": {
      width: "100%",
      transition: "transform 0.1s ease-in-out",
    },
  },
  selected: ({ level }) => ({
    "& img": {
      transform: "scale(0.8, 0.8)",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "18px",
      height: "18px",
      left: "6px",
      top: "5px",
      backgroundColor:
        level === "beginner"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      borderRadius: "9px",
      zIndex: "2",
    },
  }),
  faIcon: {
    position: "absolute",
    left: "8px",
    top: "7px",
    margin: "auto",
    zIndex: "3",
    fontSize: "14px",
  },
}));

export default memo(function SelectOption({
  imgsrc,
  alt,
  id,
  selected,
  currentPageNum,
  level,
}) {
  const imageListsDispatch = useContext(ImagesDispatchContext);
  const classes = useStyle({ level });
  console.log("level", level);

  return (
    <div
      className={`${classes.selectOption} ${
        selected ? classes.selected : null
      }`}
    >
      <div
        onClick={() => {
          imageListsDispatch({
            type: "SELECTED",
            id: id,
            currentPageNum: currentPageNum,
          });
        }}
      >
        {/* <img src={require("../img/logo512.png")} alt={alt} /> */}
        <img src={require(`${imgsrc}`)} alt={alt} />
        {/* <img src={imgsrc} alt={alt} /> */}
        {selected && (
          <FontAwesomeIcon
            className={classes.faIcon}
            icon={faCheck}
            color="white"
          />
        )}
      </div>
    </div>
  );
});
