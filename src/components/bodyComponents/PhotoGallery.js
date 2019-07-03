import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <Card style={{ margin: "5px" }} className="shadow">
          <CardHeader>
            <h6>
              {" "}
              Photo Gallery <i className="fa fa-picture-o" />{" "}
            </h6>
          </CardHeader>
          <CardBody>
            <p> Photos Go Here </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
