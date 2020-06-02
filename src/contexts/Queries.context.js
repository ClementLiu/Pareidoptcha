import React, { createContext, useReducer } from "react";
// import getQuestionsLists from "../data/get.questsionsList";
import getImglists from "../data/get.reCAPTCHA";
export const QueriesContext = createContext();
export const PageContext = createContext();

// const startList = 0;
function pageReducer(state, action) {
  // state = {currentPageNum:0, pageAmt:imgLists.length, isFinished:flase}
  switch (action.type) {
    case "NEXTPAGE":
      return state.currentPageNum < state.pageAmt - 1
        ? { ...state, currentPageNum: state.currentPageNum + 1 }
        : { ...state, isFinished: true };
    case "PREVIOUSPAGE":
      return state.currentPageNum > 0
        ? { ...state, currentPageNum: state.currentPageNum - 1 }
        : console.log("First Page");
    case "REST":
      return { ...state, isFinished: false };
    default:
      return state;
  }
}

function imageListsReducer(state, action) {
  // state === imageLists
  switch (action.type) {
    case "SELECTED":
      return state.map((imageList, index) => {
        // console.log("**********");

        if (index === action.currentPageNum) {
          let newImageParts = imageList.imageParts.map((imagePart) =>
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
  });
  const [imageLists, imageListsDispatch] = useReducer(
    imageListsReducer,
    getImglists()
  );

  // const [questionsLists, setQuestionsLists] = useState(getQuestionsLists());
  // const [imgLists, setImgLists] = useState(getImglists());
  // const [currentList, setcurrentList] = useState(startList);
  // const [isFinished, setIsFinished] = useState(false);

  // console.log("questionsLists All", imgLists);

  // // metods
  // const isSelected = (id) => {
  //   console.log("id in selelcted ", id);
  //   const updatedimgLists = imgLists.map((imgList) => {
  //     if (imgList.imgId === currentList) {
  //       // console.log("### currentList in current select", currentList);
  //       const updatedImageParts = imgList.imageParts.map((imgPart) =>
  //         imgPart.id === id
  //           ? { ...imgPart, selected: !imgPart.selected }
  //           : imgPart
  //       );
  //       console.log("updatedImageParts", updatedImageParts);

  //       const updatedImgList = {
  //         ...imgList,
  //         imageParts: updatedImageParts,
  //       };
  //       console.log("updatedImgList", updatedImgList);

  //       return updatedImgList;
  //     } else {
  //       return imgList;
  //     }
  //   });
  //   setImgLists(updatedimgLists);
  // };
  // const nextList = () =>
  //   currentList < imgLists.length - 1
  //     ? setcurrentList(currentList + 1)
  //     : setIsFinished(true);
  // const previouseList = () =>
  //   currentList > 0
  //     ? setcurrentList(currentList - 1)
  //     : console.log("first list");
  // const backToTest = () => setIsFinished(false);

  // const imgList = imgLists[currentList];

  return (
    <QueriesContext.Provider
      value={{ pageState, pageDispatch, imageLists, imageListsDispatch }}
    >
      {props.children}
    </QueriesContext.Provider>
  );
}
