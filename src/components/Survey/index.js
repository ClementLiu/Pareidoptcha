import React from "react";
import { Title } from "components/ScorePage";
import SurveyContainer from "./SurveyContainer";
import SurveyQuestions from "./SurveyQuestions";
import CongratulationScript from "./CongratulationScript";

function index(props) {
  console.log("props.setResult", props.setResult);
  return (
    <SurveyContainer>
      <Title>I AM NOT A ROBOT</Title>
      <CongratulationScript></CongratulationScript>
      <SurveyQuestions setResult={props.setResult}></SurveyQuestions>
    </SurveyContainer>
  );
}

export default index;
