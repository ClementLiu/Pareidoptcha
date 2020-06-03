import React, { useContext, memo } from "react";
import SelectOption from "./components/SelectOption";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "./contexts/Queries.context";

import { Paper, Button } from "@material-ui/core";
import { Replay, Headset, ErrorOutline } from "@material-ui/icons";
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
    <Paper className="selectList">
      <div className="selectList-title">
        <span className="selectList-caption">请选出所有包含以下元素的方格</span>
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
        <div className="selectList-controls">
          <div className="selectList-iconBtn">
            <Replay />
            <Headset />
            <ErrorOutline />
          </div>
          <Button
            className="selectList-btn"
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
            我不是机器人
          </Button>
        </div>
      </div>
      {/* <button onClick={previouseList}>Previous</button>
      <button disabled={!isAnswered && true} onClick={nextList}>
        Nextt1
      </button> */}
    </Paper>
  );
});
