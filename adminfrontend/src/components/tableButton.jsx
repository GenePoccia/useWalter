import { Component } from "react";

export default class TableButton extends Component {
  constructor(props) {
    super(props);
    this.state = { packageId: this.props.props };
  }

  handleClick = (evt) => {
    evt.preventDefault();
    let result = window.confirm(
      `Confirm the pick up of package ${this.state.packageId}`
    );

    let data = new FormData();
    data.append("packageId", this.state.packageId);

    if (result) {
      fetch("http://localhost:4000/delete-package", {
        method: "POST",
        body: data,
      });
    }
    window.alert(`${this.state.packageId} picked up`);
    window.location.reload();
  };

  render = () => {
    return <button onClick={this.handleClick}> Picked up</button>;
  };
}
