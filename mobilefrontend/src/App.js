import { Component } from "react";
import { Button, Form } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      unit: null,
      loginSuccess: false
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUnitChange = (event) => {
    this.setState({ unit: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //add in some checks
    if(!this.state.email.includes("@")) return window.alert("Enter a valid email")
    
    //validate login 
    let data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("unit", this.state.unit);
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: data
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let loginSuccess = JSON.parse(responseBody).body;
        console.log(loginSuccess)
        if (!loginSuccess) {
          window.alert("Invalid login credentials, try again");
          return;
        }
          this.setState({loginSuccess: true})
          window.alert('Successfully logged in')
      });
  };
  

  render = () => {

    const { loginSuccess } = this.state
    if(loginSuccess) {
      return <div> login success</div>
    } else {
      return (
        <div style={{ paddingLeft: "40%", paddingTop: "20%", paddingRight: "30%"}}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>E-mail</label>
                <input placeholder="E-mail" onChange={this.handleEmailChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input  type="password" placeholder="Password" onChange={this.handlePasswordChange} />
              </Form.Field>
              <Form.Field>
                <label>Unit</label>
                <input placeholder="Unit #" onChange={this.handleUnitChange}/>
              </Form.Field>
              <Button type="submit">Login</Button>
            </Form>
        </div>
      );
    }
    
  };
}
