import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import PageContent from "PageContent";
import Home from "Home";
import NotFound from "NotFound";
import { QueriesProvider } from "contexts/ImageList.context";

function App() {
  console.log("app running");

  return (
    <div className="App">
      <QueriesProvider>
        <Switch>
          <Route exact path="/recaptcha" render={() => <PageContent />} />
          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </QueriesProvider>
    </div>
  );
}

export default App;
