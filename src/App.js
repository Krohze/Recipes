import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
