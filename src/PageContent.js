import React, { useContext } from "react";
import SelectList from "components/SelecList/";
import ScoreTitle from "components/ScoreTitle";
import ScoreBar from "components/ScoreBar";
import FinishPage from "FinishPage";
import { getLevelData } from "helper/helpers";
import { PageContext } from "contexts/ImageList.context";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

const overrides = () => {
  return {
    MuiButton: {
      // Name of the rule
      root: {
        fontFamily: '"8-Bit-Madness"',
        borderRadius: 0,
        textTransform: "none",
        fontSize: "1.1rem",
      },
      // contained: {
      //   color: "white",
      // },
      outlinedPrimary: {
        // Some CSS
        border: "0",
        outline: "2px solid rgba(41, 80, 251, 1)",
        outlineOffset: "-2px",
        // borderWidth: "2px",
        "&:hover": {
          border: "0",
          outline: "2px solid rgba(41, 80, 251, 1)",
          outlineOffset: "-2px",
          backgroundColor: "rgba(41, 80, 251, 0.1)",
        },
      },
    },
  };
};
const themeBeginner = createMuiTheme({
  overrides: overrides(),
  palette: {
    primary: {
      main: "#2950FB",
    },
  },
});

const themeHard = createMuiTheme({
  overrides: overrides(),
  palette: {
    primary: {
      main: "#A35FF9",
    },
  },
});
const themeMaster = createMuiTheme({
  overrides: overrides(),
  palette: {
    primary: {
      main: "#E92985",
    },
  },
});

const useStyles = makeStyles({
  pageContent: {
    maxWidth: " 480px",
    display: "flex",
    flexDirection: "column",
  },
});

export default function PageContent(props) {
  const pageState = useContext(PageContext);
  const classes = useStyles();

  const levelData = getLevelData(pageState);
  const getTheme = () => {
    switch (levelData.level) {
      case 1:
        return themeBeginner;
      case 2:
        return themeHard;
      case 3:
        return themeMaster;
      default:
        return themeBeginner;
    }
  };
  return (
    <div className={classes.pageContent}>
      {!pageState.isFinished ? (
        <ThemeProvider
          // theme={levelData.level === 1 ? themeBeginner : themeHard}
          theme={getTheme()}
        >
          <ScoreTitle {...pageState} />
          <SelectList />
          <ScoreBar
            answeredNum={levelData.currentNumInLevel}
            level={levelData.levelName}
            questionsNum={
              levelData.level === 1
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
