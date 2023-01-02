import "./App.css";
import { Tempimg } from "./ImageComponents/Tempimg";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Temp1input from "./input/Temp1input";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tempimg />} />
          <Route path="/InputDetail" element={<Temp1input />} />
          <Route path="/Template1" element={<Template1 />} />
          <Route path="/Template2" element={<Template2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
