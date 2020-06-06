import React, { useContext } from "react";
import ResultPage from "ResultPage";
import SelectList from "SelectList";
import ScoreTitle from "components/ScoreTitle";
import ScoreBar from "components/ScoreBar";
import FinishPage from "FinishPage";
import { PageContext, ImagesContext } from "contexts/Queries.context";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const themeBeginner = createMuiTheme({
  palette: {
    primary: {
      main: "#3373D6",
    },
    secondary: {
      main: "#A35FF9",
    },
  },
});

const themehard = createMuiTheme({
  palette: {
    primary: {
      main: "#3373D6",
    },
    secondary: {
      main: "#A35FF9",
    },
  },
});

export default function PageContent(props) {
  const pageState = useContext(PageContext);
  const level = useContext(ImagesContext)[pageState.currentPageNum].level;
  console.log("render in pageContents");

  return (
    <div className="pageContent">
      {!pageState.isFinished ? (
        !pageState.isResult ? (
          <ThemeProvider
            theme={level === "beginner" ? themeBeginner : themehard}
          >
            <ScoreTitle />
            <SelectList />
            <ScoreBar answeredNum={2} questionsNum={3} />
          </ThemeProvider>
        ) : (
          <ResultPage />
        )
      ) : (
        <FinishPage />
      )}
    </div>
  );
}
