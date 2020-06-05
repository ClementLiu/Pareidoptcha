import React, { useContext } from "react";
import ResultPage from "ResultPage";
import SelectList from "SelectList";
import FinishPage from "FinishPage";
import { PageContext } from "contexts/Queries.context";

export default function PageContent(props) {
  const pageState = useContext(PageContext);
  console.log("render in pageContents");

  return (
    <div className="pageContent">
      {!pageState.isFinished ? (
        !pageState.isResult ? (
          <SelectList />
        ) : (
          <ResultPage />
        )
      ) : (
        <FinishPage />
      )}
    </div>
  );
}
