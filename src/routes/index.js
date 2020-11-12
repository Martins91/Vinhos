import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ClientsOrderedByPurchase from "../Pages/ClientsOrderedByPurchase";
import BestClient from "../Pages/BestClient";
import BestClients from "../Pages/BestClients";
import RecommendWin from "../Pages/RecommendWin";

function Routes() {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/ClientsOrderedByPurchase"} component={ClientsOrderedByPurchase} />
      <Route path={"/BestClient"} component={BestClient} />
      <Route path={"/BestClients"} component={BestClients} />
      <Route path={"/RecommendWine"} component={RecommendWin} />
    </Switch>
  );
}

export default Routes;