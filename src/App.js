import React from "react";
import "./App.css";
import PageContent from "./PageContent";

import { QueriesProvider } from "./contexts/Queries.context";

function App() {
  return (
    <div className="App">
      <QueriesProvider>
        <PageContent></PageContent>
      </QueriesProvider>
    </div>
  );
}

export default App;
