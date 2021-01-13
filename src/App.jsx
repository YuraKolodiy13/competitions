import React from 'react';
import {Route, Switch} from "react-router-dom";
import Team from "./pages/Team/Team";
import League from "./pages/League/League";
import Player from "./pages/Player/Player";
import Layout from "./layout/Layout";
import Header from "./components/Header/Header";
import Teams from "./pages/Teams/Teams";
import './assets/styles/globals.scss'
import Group from "./pages/League/Group/Group";

const App = () => {
  return (
    <div className="App container">
      <Header/>
      <Layout>
        <Switch>
          <Route path="/" component={League} exact/>
          <Route path="/league/:id" component={League} exact />
          <Route path="/league/:leagueId/groups/:id" component={Group} />
          <Route path="/teams" component={Teams} />
          <Route path="/team/:id" component={Team} />
          <Route path="/player/:id" component={Player} />
        </Switch>
      </Layout>

    </div>
  );
};

export default App;
