import React from "react";
import "./App.css";
import PageContent from "PageContent";

import { QueriesProvider } from "contexts/Queries.context";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A35FF9",
    },
    secondary: {
      main: "#3373D6",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueriesProvider>
          <PageContent></PageContent>
        </QueriesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
