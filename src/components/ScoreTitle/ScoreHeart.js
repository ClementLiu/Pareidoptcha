import React from "react";
import { styled } from "@material-ui/core/styles";

const ScoreHeartConstainer = styled("div")({
  width: "108px",
  height: "48px",
  backgroundColor: "white",
  borderRadius: "24px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 18px 0 18px",
});
function ScoreHeart() {
  return (
    <ScoreHeartConstainer>
      <img src={require("./assets/heart.svg")} alt="sweetHeart" />
      <p>188</p>
    </ScoreHeartConstainer>
  );
}

export default ScoreHeart;
