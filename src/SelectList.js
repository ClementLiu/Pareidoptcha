import React, { useContext, memo } from "react";
import SelectOption from "./components/SelectOption";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "./contexts/Queries.context";
import { Button, Typography } from "@material-ui/core";
// import styled from "styled-components";

// import {ReplayIcon} from "@material-ui/icons/Replay";

export default memo(function SelectList() {
  const imageLists = useContext(ImagesContext);
  const pageState = useContext(PageContext);
  const pageDispatch = useContext(PageDispatchContext);
  const imageList = imageLists[pageState.currentPageNum];
  // console.log("imageList IN select", imageList);
  // console.log("imageList.id", imageList.id);
  const isAnswered = imageList.imageParts
    .map((q) => q.selected)
    .reduce((a, b) => a + b);

  return (
    <div elevation={0} className="selectList">
      <div className="selectList-box">
        <div className="selectList-card">
          <div className="selectList-title">
            <span className="selectList-caption">Select all squares with</span>
            <span className="selectList-head">{imageList.title}</span>
          </div>
          <div className="selectList-imageParts">
            {imageList.imageParts.map((imagePart) => {
              return (
                <SelectOption {...imagePart} key={imagePart.id}></SelectOption>
              );
            })}
          </div>
          <div className="selectList-footer">
            <div className="selectList-divid"></div>
            <Typography className="selectList-controls" component="div">
              <Button
                className="selectList-btn"
                fontFamily="Monospace"
                variant="contained"
                color="primary"
                disabled={!isAnswered && true}
                onClick={() => {
                  pageDispatch({
                    type: "SUBMIT",
                    currentPage: pageState.currentPageNum,
                  });
                }}
              >
                I am not A ROBOT
              </Button>
            </Typography>
          </div>
          {/* <button onClick={previouseList}>Previous</button>
      <button disabled={!isAnswered && true} onClick={nextList}>
        Nextt1
      </button> */}
        </div>
      </div>
    </div>
  );
});
