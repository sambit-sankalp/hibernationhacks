import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding: 0px 5rem;
  height: auto;
  margin: 0px auto;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 95%;
    padding: 0.5rem;
  }
`;

export const NavText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.6;
  color: #ef629f;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 769px) {
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.6;
    color: #ef629f;
    margin: 5px 0px;
  }
`;

const fadeDown = keyframes`
    0% {
        transform: translateX(10px);
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff5f9;
  z-index: 999;
  box-shadow: ${({ shadow }) => (shadow ? "0px 3px 15px #080808" : "")};
  .bars {
    color: #ef629f;
    @media all and (min-width: 769px) {
      display: none;
      padding: 0px 10px;
    }
  }
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 50px;
  }
  .logo {
    width: 100%;
    height: auto;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: none;
  }
  .nav-text {
    @media all and (max-width: 1024px) {
      font-size: 0.8rem;
    }
  }
`;

export const TabLink = styled(Link)`
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
  @media all and (max-width: 1024px) {
    padding: 0 10px;
  }
`;

export const Tab = styled.div`
  color: #fff;
`;

export const MobileNavbarSection = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-top: 50px;
  background-color: #fff5f9;
  z-index: 9999;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  .mobile-nav-container {
    display: flex;
    flex-direction: column;
    z-index: 999999;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }
  .back-button {
    color: #ef629f;
    position: absolute;
    right: 50px;
    top: 40px;
  }
  .linkList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }
  .listItem {
    text-align: center;
    margin-bottom: 1em;
  }
  .link {
    font-size: 1.2em;
    text-decoration: none;
  }
`;
