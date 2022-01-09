// import { style } from "@mui/system";
import emailjs from "emailjs-com";
import React from "react";
import styled from "styled-components";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_v0v5h49",
        e.target,
        "user_NQSOh65ugSyjL5TL9cyDY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Header>
        <h1>Find Good Counselers to share feeling</h1>
      </Header>
      <Container>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <Input>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </Input>

              <br />
              <Input>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </Input>

              <input
                type="submit"
                className="btn btn-info"
                value="Book slot"
              ></input>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

const Header = styled.div`
  > h1 {
    text-align: center;
    color: #ef629f;
    margin-top: 110px;
  }
`;
const Container = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.div`
  > input {
    margin-bottom: 1rem;
    width: 100%;
    height: 15px;
  }
`;
