import React, { useContext } from "react";
import ResultPage from "./ResultPage";
import SelectList from "./SelectList";
import { QueriesContext } from "./contexts/Queries.context";

export default function PageContent(props) {
  const { isFinished } = useContext(QueriesContext);
  return <div>{!isFinished ? <SelectList /> : <ResultPage />}</div>;
}
