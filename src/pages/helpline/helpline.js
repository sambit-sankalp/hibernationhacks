import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Helpline = () => {
  const [loading, setLoading] = useState(true);
  const [copy, setCopy] = useState(false);

  const message = () => {
    if (copy === false) {
      setCopy(true);
    }
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Container>
        <h1>Contact the helpline centers in your area</h1>

        {loading ? (
          <h1>Fetching helpline numbers near you</h1>
        ) : (
          <>
            <h2>Number- 7327080609</h2>
            <button onClick={message}>Copy</button>
            {copy && <h1>copied</h1>}
          </>
        )}
      </Container>
    </div>
  );
};

export default Helpline;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1 {
    color: #ef629f;
  }
`;
