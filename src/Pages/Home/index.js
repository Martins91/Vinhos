import React from "react";
import { Container, Content, Card } from "../Home/style";

function Home() {
  return (
    <Container>
      <h1>Por favor, escolha uma das opções abaixo:</h1>
      <Content>
        <Card to="/ClientsOrderedByPurchase">Listar clientes com maior valor em compras.</Card>
        <Card to="/BestClient">
          Ver o cliente com maior compra única em 2016.
        </Card>
        <Card to="/BestClients">Ver os 3 clientes mais fieis.</Card>
        <Card to="RecommendWine">
          Verificar recomendação de vinho a um cliente.
        </Card>
      </Content>
    </Container>
  );
}

export default Home;