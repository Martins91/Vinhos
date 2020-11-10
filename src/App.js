import React from "react";
import Routes from "./routes/index";
import image from "./Assets/undraw_wine_tasting_30vw.655872a3.svg";
import { Container, Image } from "./style";
import { BrowserRouter } from "react-router-dom";

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