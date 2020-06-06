import React from "react";
import ScoreHeart from "./ScoreHeart";
import Title from "./Title";
import { styled } from "@material-ui/core/styles";

const HeadConntainer = styled("div")({
  marginTop: "35px",
  marginBottom: "35px",
  display: "flex",
  justifyContent: "center",
});
const Head = styled("div")({
  display: "flex",
  maxWidth: "580px",
  justifyContent: "space-between",
  alignItems: "center",
});
function index() {
  return (
    <HeadConntainer>
      <Head>
        <Title>How human you are</Title>
        <ScoreHeart></ScoreHeart>
      </Head>
    </HeadConntainer>
  );
}

export default index;
