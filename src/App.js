import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/marginals/navbar/Navbar";
import Home from "./screens/Home";
import Carousel from "./components/carousel/carousel";
import { blogs } from "./content/Navigation";
import Blogs from "./pages/blogs/Blogs";
import datas from "./components/cards/data";
import Maps from "./components/maps/Maps";
import Communities from "./pages/communities/Communities";
import { BasicTable } from "./components/portal/BasicTable";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Maps /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {datas.map((data) => (
          <Route path={data.link} element={<Blogs data={data} />} />
        ))}

        <Route path="/community" element={<Communities />} />
        <Route path="/portal" element={<BasicTable />} />
      </Routes>
    </Router>
  );
}

export default App;
