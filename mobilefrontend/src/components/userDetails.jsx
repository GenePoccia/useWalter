import { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resident: this.props.props.resident,
      packages: this.props.props.packages,
    };
  }
  render = () => {
    return (
      <div
        style={{
          paddingLeft: "40%",
          paddingTop: "20%",
          paddingRight: "30%",
          display: "flex",
        }}
      >
        <div style={{ borderRight: "1px solid grey", paddingRight: "5%" }}>
          <h2>Welcome {this.state.resident.name}</h2>
          <h3>Unit {this.state.resident.unit}</h3>
          <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            You have {this.state.packages.length} new package(s) waiting to be
            picked up
          </div>
          <div>
            {this.state.packages.map((x) => {
              return <div>{x.id}</div>;
            })}
          </div>
        </div>
        <div style={{ paddingLeft: "15%" }}>
          <h4>Notifications</h4> <br />
          SMS: {this.state.resident.notifications.sms.toString()} <br />
          Email: {this.state.resident.notifications.email.toString()}
        </div>
      </div>
    );
  };
}
