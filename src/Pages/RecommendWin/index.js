import React from "react";
import {useEffect, useState} from 'react';
import api from "../../Services/Api";
import { useHistory } from "react-router-dom";
import { Container, Content, Card } from "./style";
import { FaSpinner } from "react-icons/fa";

const RecommendWin = () => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState([]);
  const [wineRecommended, setWineRecommended] = useState(" ");
  const [loading, setLoading] = useState(false);

  const link = useHistory();

  useEffect(() => {
    getClients();
  }, []);

  const getClients = () => {
    api.get("/clients").then((response) => {
      setClients(response.data);
    });
  };

  const getRecommendation = (client) => {
    setLoading(true);

    client = client.replace(/-|\./g, "");
    api.get(`/recommendWine/${client}`).then((response) => {
      setWineRecommended(response.data);
      setLoading(false);
    });
  };
  return (
    <Container>
      <h1>E agora a indicação de um vinho nosso bem legal</h1>
      <Content>
       {loading ? (
        <div className="overlay">
          <FaSpinner id="spinner" color="#FFF" size={100}/>
        </div>
      ) : wineRecommended && wineRecommended.produto ? (
        <Card>
          {" "}
          <p>
            <strong>Produto: </strong>
            {wineRecommended.produto}
          </p>
          <p>
            <strong>Variedade: </strong>
            {wineRecommended.variedade}
          </p>
          <p>
            <strong>País: </strong>
            {wineRecommended.pais}
          </p>
          <p>
            <strong>Categoria: </strong>
            {wineRecommended.categoria}
          </p>
          <p>
            <strong>Safra: </strong>
            {wineRecommended.safra}
          </p>
          <p>
            <strong>Preço: </strong>
            {" " + wineRecommended.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Card>
      ): (
        <Card>Nenhuma recomendação encontrada</Card>
      )}
      {!loading && (
        <div>
          <span>Escolha o Cliente: </span>
          <select 
            onChange={(e) => {
              let cpf = e.target.value;
              getRecommendation(cpf);
              setClient(cpf);
            }}
            value={client}>
              <option></option>
              {clients.map((client) => (
                <option key={client.cpf} value={client.cpf}>{client.nome}</option>
              ))}
            </select>
          </div>
        )}
      </Content>
      <button onClick={(e) => {
        e.preventDefault();
        link.push("/");
      }}>
        Voltar
      </button>
    </Container>
  );
};

export default RecommendWin;