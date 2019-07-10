import React, { Component } from "react";
import UpdatesForm from "./UpdatesForm";
import UpdatesList from "./UpdatesList";
import { Card, CardHeader, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./updates.css";

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.appName);
    return (
      <div>
        <Card style={{ margin: "5px" }} className="shadow-lg">
          <CardHeader>
            {" "}
            עדכונים <i className="fa fa-exclamation-triangle fa-fw" />
          </CardHeader>
          <CardBody className="uCard">
            <UpdatesForm appName={this.props.appName} />
            <hr className="sectionDivider" />
            <UpdatesList
              updates={this.props.updates}
              appName={this.props.appName}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Updates;
