import React from "react";
import { styled, useTheme } from "@material-ui/core/styles";

const ScoreBarContainer = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
}));
const ScoreBarBox = styled("div")((props) => ({
  backgroundColor: "black",
  position: "relative",
  zIndex: -2,
  width: "100%",
  maxWidth: "580px",
  color: "white",
  fontSize: "1.2rem",
  padding: "12px",
  borderRadius: "70px",
  "&:before": {
    content: "''",
    zIndex: -1,
    position: "absolute",
    height: "100%",
    width: props.meter,
    backgroundColor: props.color,
    left: 0,
    top: 0,
    borderRadius: "70px 0 0 70px",
    transition: "width .5s ease-in-out",
  },
}));
function ScoreBar(props) {
  const theme = useTheme();
  return (
    <div>
      <ScoreBarContainer>
        <ScoreBarBox
          color={theme.palette.primary.main}
          meter={`${(props.answeredNum / props.questionsNum) * 100}%`}
        >
          Beginner {props.answeredNum} of {props.questionsNum}
        </ScoreBarBox>
      </ScoreBarContainer>
    </div>
  );
}

export default ScoreBar;
