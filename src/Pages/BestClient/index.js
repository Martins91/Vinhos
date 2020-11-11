import React, {useEffect, useState} from 'react';
import image from "../../Assets/undraw_winners_ao2o.fce70424.svg";
import api from "../../Services/Api";
import { useHistory } from "react-router-dom";
import { Container, Content, Card } from "./style";
import { FaSpinner } from "react-icons/fa";

const BestClient = () => {
  const [loading, setLoading] = useState(false);
  const [bestClient, setBestClient] = useState({
    nome:"0",
    valorTotal: "",
  });

  const link = useHistory();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    api.get("/bestClient").then((response) =>{
      setBestClient(response.data);
      setLoading(false);
    });
  };

  return (
    <Container>
      <h1>E o prêmio de melhor cliente de 2016 vai para:</h1>
      <Content>
        {loading ? (
          <div className="overlay">
            <FaSpinner id="spinner" color="#fff" size={100} />
          </div>
        ) : (
      <>
        <img src={image} alt="imagem ilustrativa" />
        <Card>
          {bestClient.nome && (
            <>   
              <p className="nome">{bestClient.nome}</p>
              <p>Valor Total Gasto: {" " + bestClient.valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL", 
              })}
            </p>
           </>
          )}
          </Card>
        </>
        )}
      </Content>
      <button
      onClick={(e)=>{
        e.preventDefault();
        link.push("/");
      }}
      >Voltar</button>
    </Container>
  );
};

export default BestClient;