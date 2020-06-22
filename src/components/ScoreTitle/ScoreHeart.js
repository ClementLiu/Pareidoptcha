import React from "react";
import { styled } from "@material-ui/core/styles";
import { useCountUp } from "react-countup";

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

const padToFour = (number) =>
  number <= 9999 ? `000${number}`.slice(-4) : number;

function ScoreHeart(props) {
  const { countUp, update } = useCountUp({ end: 0, duration: 0.4 });
  update(props.score);

  return (
    <ScoreHeartConstainer>
      <img src={require("./assets/score.svg")} alt="sweetHeart" />
      <ScoreHeartNumb>{padToFour(countUp)}</ScoreHeartNumb>
    </ScoreHeartConstainer>
  );
}

export default ScoreHeart;
