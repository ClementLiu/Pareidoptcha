import React, { useContext, memo } from "react";
import SelectOption from "components/SelecedOption/";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "contexts/ImageList.context";
import checkResult from "helper/checkResult";

import { Button, Grid } from "@material-ui/core";
import { styled, makeStyles } from "@material-ui/core/styles";

const ShowAnswerBtn = styled(Button)({
  padding: "2px 16px",
  width: "100%",
});

const TitleDiv = styled("div")({
  // color,
});

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
  answerBtn: {
    color: theme.palette.primary.main,
  },
  btnOutline: {},
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
const isSubmited = true;

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
            <Grid container spacing={1} className={classes.controls}>
              {isSubmited ? (
                <Grid item xs={12}>
                  <ShowAnswerBtn
                    variant="contained"
                    disableElevation
                    fullWidth
                    color="primary"
                    disabled={!isAnswered && true}
                    onClick={() => {
                      pageDispatch({
                        type: "SUBMIT",
                        // currentPage: pageState.currentPageNum,
                        result: checkResult(imageList),
                      });
                    }}
                  >
                    I am not A ROBOT
                  </ShowAnswerBtn>
                </Grid>
              ) : (
                <React.Fragment>
                  <Grid item xs={6}>
                    <ShowAnswerBtn
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        pageDispatch({
                          type: "SUBMIT",
                          // currentPage: pageState.currentPageNum,
                          result: checkResult(imageList),
                        });
                      }}
                    >
                      Show Answer
                    </ShowAnswerBtn>
                  </Grid>
                  <Grid item xs={6}>
                    <ShowAnswerBtn
                      variant="contained"
                      disableElevation
                      // fullWidth
                      color="primary"
                      onClick={() => {
                        pageDispatch({
                          type: "SUBMIT",
                          // currentPage: pageState.currentPageNum,
                          result: checkResult(imageList),
                        });
                      }}
                    >
                      Next
                    </ShowAnswerBtn>
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
});
