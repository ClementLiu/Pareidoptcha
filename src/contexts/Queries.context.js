import React, { createContext, useState } from "react";
import getQuestionsLists from "../data/get.questsionsList";
import getImglists from "../data/get.reCAPTCHA";
export const QueriesContext = createContext();
const startList = 0;

export function QueriesProvider(props) {
  const [questionsLists, setQuestionsLists] = useState(getQuestionsLists());
  const [imgLists, setImgLists] = useState(getImglists());
  const [currentList, setcurrentList] = useState(startList);
  const [isFinished, setIsFinished] = useState(false);
  console.log("questionsLists All", imgLists);

  // metods
  const isSelected = (id) => {
    console.log("id in selelcted ", id);
    const updatedimgLists = imgLists.map((imgList) => {
      if (imgList.imgId === currentList) {
        // console.log("### currentList in current select", currentList);
        const updatedImageParts = imgList.imageParts.map((imgPart) => {
          let newImgPart = { ...imgPart };
          if (imgPart.id === id) {
            console.log("#####");
            return { ...newImgPart, selected: !imgPart.selected };
          } else {
            // console.log("#####");
            return newImgPart;
          }
        });
        console.log("updatedImageParts", updatedImageParts);

        const updatedImgList = {
          ...imgList,
          imageParts: updatedImageParts,
        };
        console.log("updatedImgList", updatedImgList);

        return updatedImgList;
      } else {
        return imgList;
      }
    });
    setImgLists(updatedimgLists);
  };
  const nextList = () =>
    currentList < imgLists.length - 1
      ? setcurrentList(currentList + 1)
      : setIsFinished(true);
  const previouseList = () =>
    currentList > 0
      ? setcurrentList(currentList - 1)
      : console.log("first list");
  const backToTest = () => setIsFinished(false);

  const imgList = imgLists[currentList];

  return (
    <QueriesContext.Provider
      value={{
        imgLists,
        imgList,
        isFinished,
        isSelected,
        nextList,
        previouseList,
        backToTest,
      }}
    >
      {props.children}
    </QueriesContext.Provider>
  );
}
