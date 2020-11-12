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
  select,
  
  option {
    padding: 10px;
    width: 50%;
    border-radius: 5px;
    border: none;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color:rgb(114, 47, 55);
  height: 350px;
  width: 500px;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 5px 5px 5px ${darken(0.2, "rgb(60, 25 ,29)")};
  overflow: hidden;
  span {
    color: #FFF;
  }
  @media (max-width: 800px) {
    max-width: 70vw;
  }
`;

export const Card = styled.div`
  padding: 8px;
  background-color: #fff;
  box-shadow: 3px 3px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  height: 50%;
  width: 80%;
  margin: 5px;
  border-radius: 5px;
  p {
    margin: 5px;
  }
`;
