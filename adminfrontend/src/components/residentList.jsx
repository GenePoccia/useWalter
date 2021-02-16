import { Component } from "react";
import SingleResident from "./residentSingle";

export default class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = { residents: [] };
  }

  //get list of residents from backend
  //Better: get list of residents from DB
  componentWillMount = () => {
    fetch("http://localhost:4000/residents")
      .then((x) => {
        return x.text();
      })
      .then((responseBody) => {
        let body = JSON.parse(responseBody);
        this.setState({ residents: body.body });
      });
  };
  render = () => {
    //render each unit as a component
    return this.state.residents.map((resident) => {
      return <SingleResident props={resident} />;
    });
  };
}
