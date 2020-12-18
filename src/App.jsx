import React from 'react';
import {Route, Switch} from "react-router-dom";
import Team from "./pages/Team/Team";
import League from "./pages/League/League";
import Player from "./pages/Player/Player";
import Layout from "./layout/Layout";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App container">
      <Header/>
      <Layout>
        <Switch>
          <Route path="/" component={League} />
          <Route path="/league/:id" component={League} />
          <Route path="/team/:id" component={Team} />
          <Route path="/player/:id" component={Player} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
