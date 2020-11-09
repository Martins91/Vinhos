import React from "react";
import { Switch, Route } from "react-router-dom";
import BestClient from "../Pages/BestClient/index";
import BestClients from "../Pages/BestClients/index";
import Home from "../Pages/Home/index";
import RecommendWin from "../Pages/RecommendWin/index";
import ClientsOrderdByPurchase from "../Pages/ClientsOrderedByPurchase/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/RecommendWin"  component={RecommendWin} />
      <Route path="/BestClient"  component={BestClient} />
      <Route path="/BestClients"  component={BestClients} />
      <Route path="/ClientsOrderdByPurchase"  component={ClientsOrderdByPurchase} />
    </Switch>
  );
}