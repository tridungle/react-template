import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Form,
  Collapse
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class FileGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Card style={{ margin: "5px" }} className="shadow">
          <CardHeader style={{ cursor: "pointer" }} onClick={this.toggle}>
            <h6>
              File Gallery <i className="fa fa-file" />{" "}
            </h6>
            {!this.state.collapse ? (
              <i className="fa fa-caret-down" />
            ) : (
              <i className="fa fa-caret-up" />
            )}
          </CardHeader>
          <CardBody>
            <Collapse isOpen={this.state.collapse} className="shadow-lg">
              <CardBody>
                <Form>
                  <Input type="file" />
                  <Input type="text" placeholder="filename" />
                  <Button type="submit" />
                </Form>
              </CardBody>
            </Collapse>

            <p> Files Go Here </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
