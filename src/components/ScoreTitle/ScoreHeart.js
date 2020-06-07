import React from "react";
import { styled } from "@material-ui/core/styles";

const ScoreHeartConstainer = styled("div")({
  width: "88px",
  height: "40px",
  backgroundColor: "white",
  borderRadius: "24px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 12px 0 12px",
  alignItems: "center",
  "& img": {
    width: "20px",
  },
});
const ScoreHeartNumb = styled("p")({
  fontSize: "1.9rem",
});
function ScoreHeart() {
  return (
    <ScoreHeartConstainer>
      <img src={require("./assets/score.svg")} alt="sweetHeart" />
      <ScoreHeartNumb>0000</ScoreHeartNumb>
    </ScoreHeartConstainer>
  );
}

export default ScoreHeart;
