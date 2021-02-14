import { Component } from "react";
import SinglePackage from './singlePackage'

export default class AdminPackageList extends Component {
    constructor(props) {
        super(props)
        this.state = {listOfPackages: []}
    }
    componentWillMount = () => {
        fetch("http://localhost:4000/get-packages")
        .then(x => {
            return x.text()
        })
        .then(responseBody => {
            let body = JSON.parse(responseBody)
            this.setState({listOfPackages: body.body})
        })
    }
  render = () => {
      //renders each package
      return  this.state.listOfPackages.map(singlePackage => {
        return <SinglePackage props={singlePackage}/> 
    })
  }
}
