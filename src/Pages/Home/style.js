import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  h1 {
    color: #fff;
  }

  @media (max-width: 800px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(114, 47, 55);
  width: 500px;
  height: 350px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 6px 6px 6px ${darken(0.2, "rgb(60, 25 ,29)")};
  @media (max-width: 800px) {
    max-width: 70vw;
  }
`;

export const Card = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 3px 3px 5px ${darken(0.1, "#000")};
  text-decoration: none;
  color: black;
  @media (max-width: 800px) {
    max-width: 85vw;
  }
  
  width: 100%;
  height: 20%;
  border-radius: 5px;
  cursor: pointer;
`;