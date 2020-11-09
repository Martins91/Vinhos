import { keyframes } from "styled-components";
import styled from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgb(60, 25 ,29);
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  h1 {
    font-size: 35px;
    font-weight: 300;
  }
  
  div.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    height: 370px;
    width: 500px;
    position: fixed;
    #spinner {
      align-self: center;
      z-index: 3;
      animation: ${rotate} 2s linear infinite;
    }

    @media (max-width: 600px) {
      height: 100%;
      width: 100%;
      top: 0;
      right: 10px;
    }
  }

  @media (max-width: 600px) {
    height: 100%;
    padding-bottom: 20px;
    width: 100%;
  }
`;

export const Image = styled.div`
  img {
    max-height: 300px;
  }

  position: absolute;
  z-index: 1;
  top: 45%;
  left: 70vw;
  @media (max-width: 1920px) {
    left: 70%;
    img {
      max-height: 300px;
    }
  }

  @media (max-width: 800px) {
    top: 0%;
    left: 30%;
    img {
      max-height: 200px;
    }
  }

  @media (max-width: 430px) {
    top: 0%;
    left: 0%;
    img {
      max-height: 80px;
    }
  }
`;