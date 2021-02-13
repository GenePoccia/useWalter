import { Component } from "react";
import { connect } from "react-redux";


class UnconnectedApp extends Component {
  render = () => {
    return (
        <div>
        {/*header*/}
        <div style={{display: "flex"}}>
            <h1 style={{textAlign: "center", paddingLeft: "50%"}}>Walter Apartments</h1>
            <div style={{paddingLeft: "25%", paddingTop: "30px",}}>admin button placeholder</div>
        </div>
    
        {/*body*/}
        <div style={{paddingLeft: "15%", paddingTop: "2%"}}>
          Apartment 1: Eugenio Poccia <br />
          Apartment 2: John Doe
        </div>
        
        </div>
      );
}
}


let App = connect()(UnconnectedApp);
export default App;