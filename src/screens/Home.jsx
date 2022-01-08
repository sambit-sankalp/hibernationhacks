import React from "react";
import Carousel from "../components/carousel/carousel";
import Card from "../components/cards/Card";
import styled from "styled-components";
import data from "../components/cards/data";
import Blogs from "../pages/blogs/Blogs";
import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState(data);
  return (
    <>
      <div>
        <Carousel />
        <Heading>
          <h1>Blogs</h1>
        </Heading>

        <Cardscontainer>
          {blogs.map((blog) => {
            return <Card data={blog} />;
          })}
        </Cardscontainer>
      </div>
    </>
  );
};

export default Home;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef629f;
  font-weight: 200;
`;

const Cardscontainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
