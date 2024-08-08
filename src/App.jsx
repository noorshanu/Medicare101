
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conatact from "./pages/Conatact";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Conatact />} /> */}

        
      </Routes>
    </Router>
  </>
  );
}

export default App;
