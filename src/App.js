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
import Counsel from "./pages/counselling/counsel";
import Helpline from "./pages/helpline/helpline";
import Coming from "./components/coming/coming";
import Callblogs from "./pages/blogs/Callblogs";
function App() {
  return (
    <Router>
      <Navbar />
      {/* <Maps /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {datas.map((data) => (
          <Route path={data.link} element={<Blogs data={data} />} />
        ))}
        {/* <Route exact path="/blogs" element={<Callblogs />} /> */}

        <Route exact path="/community" element={<Communities />} />

        <Route exact path="/issues/counselling" element={<Counsel />} />
        <Route exact path="/issues/helpline" element={<Helpline />} />
        <Route exact path="/issues/marriage" element={<Coming />} />
        <Route exact path="/issues/jobs" element={<Coming />} />
      </Routes>
    </Router>
  );
}

export default App;
