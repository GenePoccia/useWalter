import { Component } from "react";
import { Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Residents from "./residentList";

export default class LandingPage extends Component {
  render = () => {
    return (
      <div>
        {/*header*/}
        <div style={{ display: "flex" }}>
          <h1 style={{ textAlign: "center", paddingLeft: "40%" }}>
            Walter Apartments
          </h1>
          <div style={{ paddingLeft: "35%", paddingTop: "30px" }}>
            <Label><Link to="/adminPanel">Admin Panel</Link></Label>
          </div>
        </div>

        {/*body*/}
        <div style={{ paddingLeft: "15%", paddingTop: "5%" }}>
          <Residents />
        </div>
      </div>
    );
  };
}
