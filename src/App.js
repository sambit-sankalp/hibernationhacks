import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/marginals/navbar/Navbar";
import Home from "./screens/Home";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
