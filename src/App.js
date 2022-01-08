import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/marginals/navbar/Navbar";
import Home from "./screens/Home";
import Carousel from "./components/carousel/carousel";
import { blogs } from "./content/Navigation";
import Blogs from "./pages/blogs/Blogs";
import datas from "./components/cards/data";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {datas.map((data) => (
          <Route path={data.link} element={<Blogs data={data} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
