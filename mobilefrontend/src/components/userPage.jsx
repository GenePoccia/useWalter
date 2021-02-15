import { Component } from "react";
import UserDetails from "./userDetails"

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfPackages: [], resident: this.props.props };
  }


  componentWillMount = () => {
    fetch("http://localhost:4000/get-packages")
      .then((x) => {
        return x.text();
      })
      .then((responseBody) => {
        let body = JSON.parse(responseBody);
        let userPackages = body.body.filter(x => {
            return x.unit == this.state.resident.unit
        })
        this.setState({ listOfPackages: userPackages });
      });
  };


  render = () => {
    let obj = {
      resident: this.state.resident,
      packages: this.state.listOfPackages
    }
    if (this.state.listOfPackages.length === 0) {
      return <div>Loading ...</div>;
    } else {
      return <div><UserDetails props={obj}/></div>;
    }
  };
}
