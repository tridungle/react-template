import React, { Component } from "react";
import UpdatesForm from "./UpdatesForm";
import UpdatesList from "./UpdatesList";
import { Card, CardHeader, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./updates.css";

class Updates extends Component {
  render() {
    return (
      <div>
        <Card style={{ margin: "5px" }} className="shadow-lg">
          <CardHeader>
            {" "}
            עדכונים <i className="fa fa-exclamation-triangle fa-fw" />
          </CardHeader>
          <CardBody className="uCard">
            <UpdatesForm />
            <hr className="sectionDivider" />
            <UpdatesList />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Updates;
