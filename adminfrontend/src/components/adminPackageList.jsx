import { Component } from "react";
import {Label, Table } from "semantic-ui-react";
import TableButton from "./tableButton"
import "semantic-ui-css/semantic.min.css";

export default class AdminPackageList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfPackages: [] };

  }

  //get packages from packages db
  componentWillMount = () => {
    fetch("http://localhost:4000/get-packages")
      .then((x) => {
        return x.text();
      })
      .then((responseBody) => {
        let body = JSON.parse(responseBody);
        this.setState({ listOfPackages: body.body });
      });
  };

  render = () => {
    //renders all packages on admin panel
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Unit</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Package ID</Table.HeaderCell>
            <Table.HeaderCell>Picked up</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {this.state.listOfPackages.map( singlePackage => {
                return (
                    <Table.Row>
                    <Table.Cell>{singlePackage.unit}</Table.Cell>
                    <Table.Cell>{singlePackage.name}</Table.Cell>
                    <Table.Cell>{singlePackage.id}</Table.Cell>
                    <Table.Cell>
                      <Label>
                        <TableButton props={singlePackage.id} />
                        </Label>
                    </Table.Cell>
                  </Table.Row> 
                )
            })}
        </Table.Body>
      </Table>
    );
  };
}
