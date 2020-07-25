import React from "react";
import ScoreContainer from "./ScoreContainer";
import ScoreBig from "./ScoreBig";
import Title from "./Title";
import Congratulation from "./Congratulation";
import CreditsSection from "./CreditsSection";
// import ShareSection from "./ShareSection";
function index(props) {
  const badgeAward = () => {
    switch (true) {
      case props.score <= 500:
        return 1;
      case props.score > 500 && props.score <= 1500:
        return 2;
      case props.score > 1500 && props.score <= 3000:
        return 3;

      default:
        return 0;
    }
  };

  return (
    <ScoreContainer>
      <Title>I AM NOT A ROBOT</Title>
      <ScoreBig badge={badgeAward(props.score)}>{props.score}</ScoreBig>
      <Congratulation awardLevel={badgeAward(props.score)}></Congratulation>
      {/* <ShareSection></ShareSection> */}
      <CreditsSection></CreditsSection>
    </ScoreContainer>
  );
}

export default index;
export { Title, ScoreContainer };
