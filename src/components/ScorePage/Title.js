import React from "react";
import { styled } from "@material-ui/core/styles";

const Titile = styled("p")({
  margin: "0px 0px 20px 0px",
  // margin: "0px 0px 60px 0px",
  textShadow: "1px -1px 0px #FFFFFF",
  color: "#F9D75F",
  width: "120px",
  textAlign: "left",
  fontSize: "2rem",
  lineHeight: "94%",
  textTransform: "uppercase",
});

function Title(props) {
  return <Titile>{props.children}</Titile>;
}

export default Title;
