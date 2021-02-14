import { Component } from "react";
import { Route } from "react-router-dom";
//pages
import LandingPage from "./components/landingPage";
import AdminPanel from "./components/adminPanel";

export default class App extends Component {
  renderRoot = () => {
    return <LandingPage />;
  };

  renderAdminPanel = () => {
    return <AdminPanel />;
  };

  render = () => {
    return (
      <div>
        <Route exact={true} path="/" render={this.renderRoot} />
        <Route exact={true} path="/adminPanel" render={this.renderAdminPanel} />
      </div>
    );
  };
}
