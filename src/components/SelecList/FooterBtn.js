import React, { useContext, memo } from "react";
import {
  PageDispatchContext,
  ImagesDispatchContext,
} from "contexts/ImageList.context";
import useStyle from "./style";
import { Grid, Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const ShowAnswerBtn = styled(Button)({
  padding: "2px 16px",
  width: "100%",
});

function FooterBtn({
  isSubmited,
  isAnswered,
  isCorrect,
  currentPageNum,
  imageList,
}) {
  const pageDispatch = useContext(PageDispatchContext);
  const imageListsDispatch = useContext(ImagesDispatchContext);
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      {/* <div className={classes.divid}></div> */}
      <Grid container spacing={1} className={classes.controls}>
        {!isSubmited ? (
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
                  imageList: imageList,
                });
              }}
            >
              I am not A ROBOT
            </ShowAnswerBtn>
          </Grid>
        ) : !isCorrect ? (
          <React.Fragment>
            <Grid item xs={6}>
              <ShowAnswerBtn
                variant="outlined"
                color="primary"
                onClick={() => {
                  imageListsDispatch({
                    type: "SHOWRIGHTANSWERIMAGE",
                    currentPageNum: currentPageNum,
                    // result: listResult,
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
                    type: "NEXTPAGE",
                  });
                }}
              >
                Next
              </ShowAnswerBtn>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid item xs={12}>
              <ShowAnswerBtn
                variant="contained"
                disableElevation
                // fullWidth
                color="primary"
                onClick={() => {
                  pageDispatch({
                    type: "NEXTPAGE",
                    // currentPage: pageState.currentPageNum,
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
  );
}

export default memo(FooterBtn);
