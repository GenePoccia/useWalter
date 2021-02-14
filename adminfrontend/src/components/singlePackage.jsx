import { Component } from "react";

export default class SinglePackage extends Component {
  constructor(props) {
    super(props);
    this.state = { singlePackage: props.props };
  }

  render = () => {
    return (
      <div style={{ paddingTop: "5%", display: "flex" }}>
        <div >{this.state.singlePackage.id}</div>
        <div style={{paddingLeft: "5%"}}>{this.state.singlePackage.name}</div>
        <div style={{paddingLeft: "5%"}}>{this.state.singlePackage.unit}</div>
        <div style={{paddingLeft: "25%"}}> Picked up by resident</div>
      </div>
    );
  };
}
