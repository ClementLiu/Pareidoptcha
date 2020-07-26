import React from "react";
import useStyles from "./style";

function SimpleBtn(props) {
  const classes = useStyles();
  return (
    <div
      onClick={props.onClick}
      className={
        props.isSelected && props.isAnswered
          ? `${classes.btnStroke} ${classes.btnStrokeSelected}`
          : classes.btnStroke
      }
    >
      {props.children}
    </div>
  );
}
SimpleBtn.defaultProps = {
  isSelected: false,
  isAnswered: false,
};
export default SimpleBtn;
