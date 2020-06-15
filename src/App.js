import React from "react";
import "./App.css";
import PageContent from "PageContent";

import { QueriesProvider } from "contexts/ImageList.context";
// import { purple } from "@material-ui/core/colors";

function App() {
  console.log("app running");

  return (
    <div className="App">
      <QueriesProvider>
        <PageContent></PageContent>
      </QueriesProvider>
    </div>
  );
}

export default App;
