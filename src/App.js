import React, { Fragment } from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import Homepage from "./Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Homepage />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
