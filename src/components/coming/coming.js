import React from "react";
import styled from "styled-components";
const Coming = () => {
  return (
    <div>
      <Container>
        <h1>Coming soon....</h1>
      </Container>
    </div>
  );
};

export default Coming;

const Container = styled.div`
  /* margin-top: 100px; */
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff5f9;
  > h1 {
    color: #ef629f;
  }
`;
