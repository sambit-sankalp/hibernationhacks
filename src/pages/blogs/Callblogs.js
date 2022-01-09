import React from "react";
import datas from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
const Callblogs = () => {
  return (
    <div>
      {datas.map((data) => (
        <Route path={data.link} element={<Blogs data={data} />} />
      ))}
    </div>
  );
};

export default Callblogs;
