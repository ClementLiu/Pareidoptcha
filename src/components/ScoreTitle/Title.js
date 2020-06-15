import React from "react";
import { useTheme, styled } from "@material-ui/core/styles";

const Titile = styled("span")((props) => ({
  textShadow: "1px -1px 0px #FFFFFF",
  color: props.color,
  width: "50%",
  textAlign: "left",
  fontSize: "2rem",
  lineHeight: "94%",
  textTransform: "uppercase",
}));

function Title(props) {
  const theme = useTheme();
  return <Titile color={theme.palette.primary.main}>{props.children}</Titile>;
}

export default Title;
