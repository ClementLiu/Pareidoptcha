import React from "react";
import ScoreHeart from "./ScoreHeart";
import Title from "./Title";
import { styled } from "@material-ui/core/styles";

const HeadConntainer = styled("div")({
  marginTop: "35px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
});
const Head = styled("div")({
  display: "flex",
  // maxWidth: "580px",
  maxWidth: "296px",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
function index({ score }) {
  return (
    <HeadConntainer>
      <Head>
        <Title>
          I AM NOT
          <br />A ROBOT
        </Title>
        <ScoreHeart score={score}></ScoreHeart>
      </Head>
    </HeadConntainer>
  );
}

export default index;
