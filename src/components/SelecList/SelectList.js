import React, { useContext, memo, useRef, useEffect } from "react";
import SelectOption from "components/SelecedOption/";
import {
  ImagesContext,
  PageContext,
  PageDispatchContext,
} from "contexts/ImageList.context";
import TitleDiv from "./TitleDiv";
import FooterBtn from "./FooterBtn";
import useStyle from "./style";

import Countdown from "react-countdown";

export default memo(function SelectList() {
  const imageLists = useContext(ImagesContext);
  const pageState = useContext(PageContext);
  const pageDispatch = useContext(PageDispatchContext);
  const imageList = imageLists[pageState.currentPageNum];
  // ! this gonna create many clases;
  const classes = useStyle();
  const { isSubmited, isCorrect, currentPageNum } = pageState;
  const isAnswered = imageList.imageParts
    .map((q) => q.selected)
    .reduce((a, b) => a + b);
  //todo workon timer
  const tragetRefer = useRef();
  useEffect(() => {
    tragetRefer.current.start();
  }, [currentPageNum]);
  // tragetRefer.current.start();
  return (
    <div className={classes.selectList}>
      <div className={classes.box}>
        <div className={classes.card}>
          <TitleDiv
            title={imageList.title}
            isSubmited={isSubmited}
            isCorrect={isCorrect}
          />
          <Countdown
            date={pageState.timeTest}
            ref={tragetRefer}
            onComplete={(props) => {
              pageDispatch({
                type: "SUBMIT",
                imageList: imageList,
              });
            }}
          />
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
          <FooterBtn
            isSubmited={isSubmited}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            imageList={imageList}
            currentPageNum={currentPageNum}
          />
        </div>
      </div>
    </div>
  );
});
