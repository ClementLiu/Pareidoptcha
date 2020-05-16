import React, { useContext } from "react";
import SelectOption from "./components/SelectOption";
import { QueriesContext } from "./contexts/Queries.context";

export default function SelectList() {
  const { imgList, nextList, previouseList } = useContext(QueriesContext);
  console.log("imgList IN select", imgList);
  const isAnswered = imgList.imageParts
    .map((q) => q.selected)
    .reduce((a, b) => a + b);

  return (
    <div>
      <h1>{imgList.title}</h1>
      <p className="SelectList-details" style={{ whiteSpace: "pre-wrap" }}>
        {imgList.details}
      </p>
      <div className="imageParts">
        {imgList.imageParts.map((imagePart) => {
          return (
            <SelectOption {...imagePart} key={imagePart.id}></SelectOption>
          );
        })}
      </div>
      <button onClick={previouseList}>Previous</button>
      <button disabled={!isAnswered && true} onClick={nextList}>
        Next
      </button>
    </div>
  );
}
