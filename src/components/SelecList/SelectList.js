import React, { useContext, memo } from "react";
import SelectOption from "components/SelecedOption/";
import { ImagesContext, PageContext } from "contexts/ImageList.context";
import TitleDiv from "./TitleDiv";
import FooterBtn from "./FooterBtn";
import useStyle from "./style";

export default memo(function SelectList() {
  const imageLists = useContext(ImagesContext);
  const pageState = useContext(PageContext);
  const imageList = imageLists[pageState.currentPageNum];
  // ! this gonna create many clases;
  const classes = useStyle();
  const { isSubmited, isCorrect, currentPageNum } = pageState;
  const isAnswered = imageList.imageParts
    .map((q) => q.selected)
    .reduce((a, b) => a + b);

  return (
    <div className={classes.selectList}>
      <div className={classes.box}>
        <div className={classes.card}>
          <TitleDiv
            title={imageList.title}
            isSubmited={isSubmited}
            isCorrect={isCorrect}
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
