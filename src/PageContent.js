import React, { useContext } from "react";
import ResultPage from "./ResultPage";
import SelectList from "./SelectList";
import { QueriesContext } from "./contexts/Queries.context";

export default function PageContent(props) {
  const { pageState } = useContext(QueriesContext);
  return <div>{!pageState.isFinished ? <SelectList /> : <ResultPage />}</div>;
}
