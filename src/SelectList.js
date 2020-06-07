import React, { useContext, memo } from "react";
import SelectOption from "components/SelecedOption/";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "contexts/ImageList.context";

import { Button } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";

// import {ReplayIcon} from "@material-ui/icons/Replay";
// ! the font url is not stable
// todo host font on github. the size only 14 kb
// ! RegExp can help... never mind
// todo add level
// todo change other page to useStyle
// ? play with level hard and beginer
// ** one solotion: manually change all details with color.
// ** second create a color var for level.
// ***** but the theme color also need to be changed and also the selected color
// ??? how to keep consistency
// ***** use styled component but how to use theme?
const TypeButton = styled(Button)({
  fontFamily: '"8-Bit-Madness"',
  borderRadius: 3,
  color: "white",
  display: "block",
  // width: "100%",
  borderRadius: "0",
  textTransform: "none",
  fontSize: "1.1rem",
  padding: "2px 16px",
});
const TitleDiv = styled("div")({});

const useStyle = makeStyles((theme) => ({
  selectList: {
    minWidth: "391px",
    padding: "8px",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: " 280px",
    padding: "8px",
    backgroundColor: " white",
  },
  title: {
    width: "auto",
    textAlign: "left",
    padding: "6px 6px 12px 16px",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "8px",
  },
  caption: {
    display: " block",
    fontStyle: " normal",
    fontWeight: " 500",
    fontSize: " 1rem",
    lineHeight: " 22px",
    color: " #ffffff",
  },
  head: {
    display: " block",
    fontStyle: " normal",
    fontWeight: " 600",
    fontSize: " 1.9rem",
    letterSpacing: "0.1rem",
    lineHeight: " 39px",
    color: " #ffffff",
    textTransform: "uppercase",
  },
  /*   divid: {
    borderTop: " #e3e3e3 solid 1px",
    height: " 0px",
    marginBottom: " 8px",
  }, */
  /* btn: ({ level }) => {
    console.log("btn-props", level);

    return {
      backgroundColor:
        level === "beginner"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    };
  }, */
  imageParts: {
    display: " flex",
    flexWrap: " wrap",
    width: " 100%",
    // width: " 392px",
    marginBottom: " 8px",
  },
  footer: {},
  controls: {
    display: " flex",
    justifyContent: " space-between",
  },
}));

export default memo(function SelectList() {
  const imageLists = useContext(ImagesContext);
  const pageState = useContext(PageContext);
  const pageDispatch = useContext(PageDispatchContext);
  const imageList = imageLists[pageState.currentPageNum];
  // ! this gonna create many clases;
  const classes = useStyle();
  // console.log("imageList IN select", imageList);
  // console.log("imageList.id", imageList.id);
  const isAnswered = imageList.imageParts
    .map((q) => q.selected)
    .reduce((a, b) => a + b);

  return (
    <div className={classes.selectList}>
      <div className={classes.box}>
        <div className={classes.card}>
          <TitleDiv className={classes.title}>
            <span className={classes.caption}>Select all squares with</span>
            <span className={classes.head}>{imageList.title}</span>
          </TitleDiv>
          <div className={classes.imageParts}>
            {imageList.imageParts.map((imagePart) => {
              return (
                <SelectOption
                  {...imagePart}
                  key={imagePart.id}
                  currentPageNum={pageState.currentPageNum}
                ></SelectOption>
              );
            })}
          </div>
          <div className={classes.footer}>
            {/* <div className={classes.divid}></div> */}
            <div className={classes.controls}>
              <TypeButton
                className={classes.btn}
                variant="contained"
                fullWidth
                color="primary"
                disabled={!isAnswered && true}
                onClick={() => {
                  pageDispatch({
                    type: "NEXTPAGE",
                    currentPage: pageState.currentPageNum,
                  });
                }}
              >
                I am not A ROBOT
              </TypeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
