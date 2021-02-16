import { Component } from "react";
import DeliveryPackage from "./deliverPackage";

export default class SingleResident extends Component {
  constructor(props) {
    super(props);
    this.state = { residents: props.props };
  }
  render = () => {
    //Each unit displayed in a list with their unit # + name
    //Delivery button takes unit # as props to properly send notification
    return (
      <div>
        <div style={{ paddingBottom: "2%" }}>
          {this.state.residents.unit} | {this.state.residents.name}
        </div>
        <div style={{ paddingBottom: "5%" }}>
          <DeliveryPackage props={this.state.residents} />
        </div>
      </div>
    );
  };
}
