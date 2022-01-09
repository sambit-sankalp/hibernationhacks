import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Widecard = ({ card }) => {
  console.log(card);
  return (
    <>
      <a
        href="https://dare2compete.com/creative-cultural-event/mylifemantra-from-my-mother-manav-rachna-university-mru-faridabad-164743"
        target="_blank"
      >
        <SingleWideCard>
          <section>
            {/* <h1>Hii</h1> */}

            <img src={card} alt="gg" />
          </section>

          <div>REGISTER NOW</div>
        </SingleWideCard>
      </a>
    </>
  );
};

export default Widecard;
// Don't forget setting minimum and maximum width
const SingleWideCard = styled.div`
  margin-bottom: 6.5rem;
  width: 50vw;
  background-color: #fff5f9;

  border-radius: 1.2rem 1.2rem 0 0;
  position: relative;

  text-align: center;

  & > div {
    background-color: #ff80e9;
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    border-radius: 0 0 0.7rem 0.7rem;

    font-size: 1.5rem;
    color: whitesmoke;
    font-weight: bolder;
    padding: 1rem 0;
  }
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  > section {
    /* display: grid;
    grid-template-columns: 1.5fr 1fr; */
    justify-items: center;
    align-items: center;
    > img {
      width: 100%;
      height: auto;
    }
    /* > h1 {
      color: whitesmoke;
      font-size: 2rem;
      padding: 4rem 0.5rem;
    } */
  }
`;
