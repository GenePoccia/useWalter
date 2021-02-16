import { Component } from "react";
import { Link } from "react-router-dom";
import AdminPackageList from "./adminPackageList"

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
          <Link to="/">Back</Link>
          </div>
        </div>

        {/*body*/}
        <div style={{ paddingLeft: "15%",paddingRight: "15%", paddingTop: "5%" }}>
        <AdminPackageList/>
        </div>
      </div>
    );
  };
}
