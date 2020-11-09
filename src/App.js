import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes/Routes';
import image from "./Assets/undraw_wine_tasting_30vw.655872a3.svg";
import { Container, Image } from "./style";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
      <Image>
        <img src={image} alt="imagem decorativa"></img>
      </Image>
    </>
  );
}

export default App;