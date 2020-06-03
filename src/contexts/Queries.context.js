import React, { createContext, useReducer } from "react";
// import getQuestionsLists from "../data/get.questsionsList";
import getImglists from "../data/get.reCAPTCHA";
export const ImagesContext = createContext();
export const ImagesDispatchContext = createContext();
export const PageContext = createContext();
export const PageDispatchContext = createContext();

// const startList = 0;
function pageReducer(state, action) {
  // state = {currentPageNum:0, pageAmt:imgLists.length, isFinished:flase}
  switch (action.type) {
    case "NEXTPAGE":
      return state.currentPageNum < state.pageAmt - 1
        ? {
            ...state,
            currentPageNum: state.currentPageNum + 1,
            isResult: false,
          }
        : { ...state, isFinished: true };
    case "PREVIOUSPAGE":
      return state.currentPageNum > 0
        ? { ...state, currentPageNum: state.currentPageNum - 1 }
        : console.log("First Page");
    case "SUBMIT":
      return { ...state, isResult: true };
    case "BACK":
      return { ...state, isResult: false };
    case "REST":
      return { ...state, currentPageNum: 0 };
    default:
      return state;
  }
}

function imageListsReducer(state, action) {
  // todo
  // !
  // *
  // ? where is the source
  /*   switch (key) {
    case value:
      
      break;
  
    default:
      break;
  } */
  switch (action.type) {
    case "SELECTED":
      return state.map((imageList, index) => {
        // index === action.currentPageNum? {...imageList, selected: }:imageList;
        if (index === action.currentPageNum) {
          console.log("**********");
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

export function QueriesProvider(props) {
  // reducer
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    currentPageNum: 0,
    pageAmt: getImglists().length,
    isFinished: false,
    isResult: false,
  });
  console.log("pageState", pageState);

  const [imageLists, imageListsDispatch] = useReducer(
    imageListsReducer,
    getImglists()
  );

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
