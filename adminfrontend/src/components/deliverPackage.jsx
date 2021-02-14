import { Component } from "react";

export default class DeliveryPackage extends Component {
  constructor(props) {
    super(props);
    this.state={resident: props.props}
  }

  sendNotification = () => {
    //Build a form to send to the backend
    let data = new FormData();
    data.append("resident", this.state.resident.name);
    data.append("unit", this.state.resident.unit)
    //Ping backend here to update resident DB so resident's package key gets updated with a package
    fetch("http://localhost:4000/sendNotification",{
        method: "POST",
        body: data,
        credentials: "include"
      })
    .then(x => {
        return x.text()
    })
    .then(responseBody => {
    })
    //window.alert(`Delivery notification sent to unit ${this.state.unit}`)
  }
  render = () => {
      return  <button onClick={this.sendNotification}>Deliver Package</button>
  }
}
