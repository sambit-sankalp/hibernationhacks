import React from "react";
import styled from "styled-components";
const Blogs = ({ data }) => {
  const { heading, intro, content, suggestions } = data;
  return (
    <BlogContainer>
      <h1>{heading}</h1>
      <h2>{intro}</h2>
      <p>{content}</p>
      <h2>Suggestions</h2>
      <p>{suggestions}</p>
    </BlogContainer>
  );
};

export default Blogs;

const BlogContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  > h1,
  h2 {
    color: #ef629f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > p {
    letter-spacing: 1px;
    margin: auto;
    width: 50vw;
    font-size: large;
    line-height: 40px;
  }
`;
