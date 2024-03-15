// App.jsx
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./component/header/Header1";
import Header2 from "./component/header/Header2";
import Header3 from "./component/header/Header3";
import Hero from "./component/hero/Hero";
import Main from "./component/main/Main";
import Footer from "./component/footer/footer";
import ScrollToTop from "./component/scroll/ScrollToTop";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.
// @ts-ignore
        bg.main}>
          <Hero />
          <Main />
        </Box>
        <Footer/>
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
