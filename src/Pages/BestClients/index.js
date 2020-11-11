import React from 'react'
import api from "../../Services/Api";
import { useHistory } from "react-router-dom";
import { Container, Content, Card } from "./style";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const BestClient = () => {
  const [bestClients, setBestClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const link = useHistory();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    api.get("/bestClients").then((response) => {
      setBestClients(response.data);
      setLoading(false);
    });
  };
  return (
    <Container>
      <h1>Nossos fiéis escudeiros:</h1>
      <Content>
        {loading ? (
          <div className="overlay">
            <FaSpinner id="spinner" color="#FFF" size={100} />
          </div>
        ) : (
          bestClients.map((client, index)=>
          index < 3 && (
            <Card key={index}>
              <p>{client.nome}</p>
              <p>Total de Compras: {client.totalCompras}</p>
            </Card>
          ))
        )}
      </Content>
        <button
        onClick={(e) => {
          e.preventDefault();
          link.push("/");
        }}>
          Voltar
        </button>
    </Container>
  );
};
export default BestClient;
