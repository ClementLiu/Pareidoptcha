import React, { createContext, useReducer } from "react";
// import getQuestionsLists from "../data/get.questsionsList";
import getImglists from "data/get.reCAPTCHA";
import checkResult from "helper/checkResult";
import { sumObject } from "helper/helpers";

export const ImagesContext = createContext();
export const ImagesDispatchContext = createContext();
export const PageContext = createContext();
export const PageDispatchContext = createContext();
export const ResultContext = createContext();
export const ResultDispatchContext = createContext();

const imgListsOri = getImglists();
// const startList = 0;

const addScore = (action) => {
  console.log("action.imageList.level", action.imageList.level);
  switch (action.imageList.level) {
    case "Rookie":
      return 100;
    case "Senior":
      return 200;
    case "Master":
      return 300;
    default:
      break;
  }
};
function pageReducer(state, action) {
  // state = {currentPageNum:0, pageAmt:imgLists.length, isFinished:flase}
  switch (action.type) {
    case "NEXTPAGE":
      return state.currentPageNum < sumObject(state.levelNum) - 1
        ? {
            ...state,
            currentPageNum: state.currentPageNum + 1,
            isSubmited: false,
            isCorrect: false,
            timeTest: Date.now() + 20000,
          }
        : { ...state, isFinished: true };
    case "PREVIOUSPAGE":
      return state.currentPageNum > 0
        ? { ...state, currentPageNum: state.currentPageNum - 1 }
        : state;
    case "SHOWANSWER":
      return state;
    // todo add after submit animation
    // todo don't need check every click
    case "SUBMIT":
      return checkResult(action.imageList)
        ? {
            ...state,
            score: state.score + addScore(action),
            isCorrect: true,
            isSubmited: true,
          }
        : {
            ...state,
            isCorrect: false,
            isSubmited: true,
          };
    case "TIMEUP":
      if (state.isSubmited === false) {
        console.log("timeup working");
        return checkResult(action.imageList)
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
      }
      break;
    case "STARTTIMER":
      return { ...state, timeTest: Date.now() + 20000 };
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
        if (index === action.currentPageNum) {
          const newImageParts = imageList.imageParts.map((imagePart) =>
            imageList.checkPoints.includes(imagePart.label)
              ? { ...imagePart, selected: true }
              : { ...imagePart, selected: false }
          );
          return { ...imageList, imageParts: newImageParts };
        } else {
          return imageList;
        }
      });
    case "SHOWFACE":
      console.log("showFace");
      return state.map((imageList, index) => {
        // index === action.currentPageNum? {...imageList, selected: }:imageList;
        if (index === action.currentPageNum && imageList.showFace === false) {
          console.log("face in show", imageList.showFace);
          return { ...imageList, showFace: true };
        } else {
          return imageList;
        }
      });
    case "HIDEFACE":
      console.log("hideFace");
      return state.map((imageList, index) => {
        // index === action.currentPageNum? {...imageList, selected: }:imageList;
        if (index === action.currentPageNum && imageList.showFace === true) {
          return { ...imageList, showFace: false };
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
  let masterNum = 0;
  imgListsOri.forEach((element) => {
    switch (element.level) {
      case "Rookie":
        beginnerNum++;
        break;
      case "Senior":
        hardNum++;
        break;
      case "Master":
        masterNum++;
        break;
      default:
        console.log("element.level", element.level);

        break;
    }
  });
  return { beginnerNum, hardNum, masterNum };
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
    timeTest: Date.now() + 20000,
  });
  const [resultState, resultDispatch] = useReducer(pageReducer, {});

  return (
    <PageContext.Provider value={pageState}>
      <PageDispatchContext.Provider value={pageDispatch}>
        <ImagesContext.Provider value={imageLists}>
          <ImagesDispatchContext.Provider value={imageListsDispatch}>
            <ResultContext.Provider value={resultState}>
              <ResultDispatchContext.Provider value={resultDispatch}>
                {props.children}
              </ResultDispatchContext.Provider>
            </ResultContext.Provider>
          </ImagesDispatchContext.Provider>
        </ImagesContext.Provider>
      </PageDispatchContext.Provider>
    </PageContext.Provider>
  );
}
