import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles, theme } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
