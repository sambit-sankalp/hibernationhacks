import React from "react";
import styled from "styled-components";
import Maps from "../../components/maps/Maps";
import Widecard from "../../components/widecards/widecards";
import { useState } from "react";
import data from "./data";
const Communities = () => {
  console.log(data);
  return (
    <>
      <Container>
        <h1>Find communities and events happening near you</h1>
        <Maps />

        <h1>Events</h1>

        <Events>
          {data.map(({ id, img }) => (
            <article key={id}>
              <Widecard card={img} />
            </article>
          ))}
        </Events>
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

const Events = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
