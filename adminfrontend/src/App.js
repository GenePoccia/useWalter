import { Component } from "react";
import Residents from "./components/residentList"

export default class App extends Component {
  render = () => {
    return (
        <div>
        {/*header*/}
        <div style={{display: "flex"}}>
            <h1 style={{textAlign: "center", paddingLeft: "40%"}}>Walter Apartments</h1>
            <div style={{paddingLeft: "35%", paddingTop: "30px",}}>admin button placeholder</div>
        </div>
    
        {/*body*/}
        <div style={{paddingLeft: "15%", paddingTop: "5%"}}>
            <Residents />
        </div>
        
        </div>
      );
}
}

