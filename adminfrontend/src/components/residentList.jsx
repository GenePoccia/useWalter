import { Component } from "react";


export default class Residents extends Component {
    constructor(props) {
        super(props);
        this.state = {residents: []};
      }

    componentWillMount = () => {
        fetch("http://localhost:4000/residents")
        .then(x => {
            return x.text()
        })
        .then(responseBody => {
            let body = JSON.parse(responseBody)
            this.setState({residents: body.body})
        })
    }
  render = () => {
      console.log('state', this.state.residents)
     return  this.state.residents.map(resident => {
          return (<div >
              <div style={{paddingBottom: "2%"}}>{resident.unit} | {resident.name}</div>
              <div style={{paddingBottom: "5%"}}> Deliver Package</div>
              </div>
              
          )
      })
}
}

