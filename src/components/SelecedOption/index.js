import React, { useContext, memo } from "react";
import { ImagesDispatchContext } from "contexts/ImageList.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useStyle from "./style";
// ? what if I want to use one props control multi attr? is there a props => props && css
// ! it worked
// ? we don't need to have individual class style for each image. They can share

export default memo(function SelectOption({
  imgsrc,
  imgsrcLink,
  alt,
  id,
  selected,
  currentPageNum,
}) {
  const imageListsDispatch = useContext(ImagesDispatchContext);
  const classes = useStyle();

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
        {/* <img src={require(`${imgsrc}`)} alt={alt} /> */}
        <img src={imgsrcLink} alt={alt} />
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
