import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanagesMap from "./pages/OrphanagersMap";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch> {/*Switch é usado para fazer com que apenas uma rota seja exibida, ele é opcional.*/}
        <Route component={Landing} path="/" exact />
        <Route component={OrphanagesMap} path="/app" />
        <Route component={CreateOrphanage} path="/orphanages/create" />
        <Route component={Orphanage} path="/orphanages/:id" />
      </Switch>
    </BrowserRouter>
  );
}
