import React from "react";
import styled from "styled-components";
import Maps from "../../components/maps/Maps";
const Communities = () => {
  return (
    <>
      <Container>
        <h1>Find communities and events happening near you</h1>
        <Maps />

        <h1>Events</h1>
      </Container>
    </>
  );
};

export default Communities;

const Container = styled.div`
  margin-top: 150px;
  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ef629f;
    font-size: 3rem;
  }
`;
