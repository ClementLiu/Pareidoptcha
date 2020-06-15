import React, { createContext, useReducer } from "react";
// import getQuestionsLists from "../data/get.questsionsList";
import getImglists from "data/get.reCAPTCHA";
export const ImagesContext = createContext();
export const ImagesDispatchContext = createContext();
export const PageContext = createContext();
export const PageDispatchContext = createContext();

const imgListsOri = getImglists();
// const startList = 0;
function pageReducer(state, action) {
  // state = {currentPageNum:0, pageAmt:imgLists.length, isFinished:flase}
  switch (action.type) {
    case "NEXTPAGE":
      return state.currentPageNum <
        state.levelNum.beginnerNum + state.levelNum.hardNum - 1
        ? {
            ...state,
            currentPageNum: state.currentPageNum + 1,
            isSubmited: false,
            isCorrect: false,
          }
        : { ...state, isFinished: true };
    case "PREVIOUSPAGE":
      return state.currentPageNum > 0
        ? { ...state, currentPageNum: state.currentPageNum - 1 }
        : state;
    case "SHOWANSWER":
      return state;
    // todo add after submit animation
    case "SUBMIT":
      return action.result
        ? {
            ...state,
            score: state.score + 100,
            isCorrect: true,
            isSubmited: true,
          }
        : {
            ...state,
            isCorrect: false,
            isSubmited: true,
          };
    /*     {
      if (action.result) {
        let newCurPage =
          state.currentPageNum <
          state.levelNum.beginnerNum + state.levelNum.hardNum - 1
            ? state.currentPageNum + 1
            : state.currentPageNum;
        return {
          ...state,
          score: state.score + 100,
          isSubmited: true,
          currentPageNum: newCurPage,
        };
      } else {
        console.log("wrong R");
        return state;
      }
    } */
    case "BACK":
      return { ...state, isSubmited: false };
    case "REST":
      return { ...state, currentPageNum: 0 };
    default:
      return state;
  }
}

function imageListsReducer(state, action) {
  switch (action.type) {
    case "SHOWRIGHTANSWERIMAGE":
      return state.map((imageList, index) => {
        console.log("show answer****");
        // index === action.currentPageNum? {...imageList, selected: }:imageList;
        if (index === action.currentPageNum) {
          const newImageParts = imageList.imageParts.map((imagePart) =>
            imageList.checkPoints.includes(imagePart.label)
              ? { ...imagePart, selected: true }
              : { ...imagePart, selected: false }
          );
          console.log("newImageParts", newImageParts);

          return { ...imageList, imageParts: newImageParts };
        } else {
          return imageList;
        }
      });
    case "SELECTED":
      return state.map((imageList, index) => {
        // index === action.currentPageNum? {...imageList, selected: }:imageList;
        if (index === action.currentPageNum) {
          const newImageParts = imageList.imageParts.map((imagePart) =>
            imagePart.id === action.id
              ? { ...imagePart, selected: !imagePart.selected }
              : imagePart
          );
          return { ...imageList, imageParts: newImageParts };
        } else {
          return imageList;
        }
      });

    default:
      return state;
  }
}

const getLevelNum = () => {
  let beginnerNum = 0;
  let hardNum = 0;
  imgListsOri.forEach((element) => {
    element.level === "Rookie" ? beginnerNum++ : hardNum++;
  });
  // console.log("beginnerNum:", beginnerNum);
  // console.log("hardNum:", hardNum);
  return { beginnerNum, hardNum };
};

export function QueriesProvider(props) {
  // reducer
  const [imageLists, imageListsDispatch] = useReducer(
    imageListsReducer,
    imgListsOri
  );
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    currentPageNum: 0,
    score: 0,
    isFinished: false,
    isSubmited: false,
    isCorrect: false,
    levelNum: getLevelNum(),
  });

  return (
    <PageContext.Provider value={pageState}>
      <PageDispatchContext.Provider value={pageDispatch}>
        <ImagesContext.Provider value={imageLists}>
          <ImagesDispatchContext.Provider value={imageListsDispatch}>
            {props.children}
          </ImagesDispatchContext.Provider>
        </ImagesContext.Provider>
      </PageDispatchContext.Provider>
    </PageContext.Provider>
  );
}
