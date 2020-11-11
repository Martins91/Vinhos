import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  h1 {
    color: #FFF;
  }

  @media (max-width: 800px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 100px;
  }

  button {
    margin-top: 20px;
    color: #fff;
    width: 250px;
    height: 50px;
    border: none;
    background-color:rgb(114, 47, 55);
    border-radius: 2px;
    cursor: pointer;
    font-size: 25px;
    font-family: "PT Sans Narrow", sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color:rgb(114, 47, 55);
  width: 500px;
  height: 350px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 6px 6px 6px ${darken(0.2, "rgb(114, 47, 55)")};
  overflow: auto;

  @media (max-width: 800px) {
    max-width: 70vw;
  }
`;

export const Card = styled.div`
  background-color: #FFF;
  box-shadow: 3px 3px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
`;