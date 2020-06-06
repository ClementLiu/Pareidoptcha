import React, { useContext } from "react";
import SelectList from "SelectList";
import ScoreTitle from "components/ScoreTitle";
import ScoreBar from "components/ScoreBar";
import FinishPage from "FinishPage";
import { PageContext } from "contexts/ImageList.context";
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
      main: "#A35FF9",
    },
    secondary: {
      main: "#3373D6",
    },
  },
});

export default function PageContent(props) {
  const pageState = useContext(PageContext);
  // const level = useContext(ImagesContext)[pageState.currentPageNum].level;
  const level =
    pageState.currentPageNum < pageState.levelNum.beginnerNum
      ? "beginner"
      : "hard";
  const currentNumInLevel =
    level === "beginner"
      ? pageState.currentPageNum + 1
      : pageState.currentPageNum + 1 - pageState.levelNum.beginnerNum;
  return (
    <div className="pageContent">
      {!pageState.isFinished ? (
        <ThemeProvider theme={level === "beginner" ? themeBeginner : themehard}>
          <ScoreTitle />
          <SelectList />
          <ScoreBar
            answeredNum={currentNumInLevel}
            level={level}
            questionsNum={
              level === "beginner"
                ? pageState.levelNum.beginnerNum
                : pageState.levelNum.hardNum
            }
          />
        </ThemeProvider>
      ) : (
        <FinishPage />
      )}
    </div>
  );
}
