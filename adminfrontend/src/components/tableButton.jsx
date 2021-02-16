import { Component } from "react";

export default class TableButton extends Component {
  constructor(props) {
    super(props);
    this.state = { packageId: this.props.props };
  }

  handleClick = evt => {
    evt.preventDefault()
    let result = window.confirm(`Confirm the pick up of package ${this.state.packageId}`)

    if(result) {
      //delete object from s3
    }
  }

  render = () => {
      return <button onClick={this.handleClick}> Picked up</button>
  }
}
