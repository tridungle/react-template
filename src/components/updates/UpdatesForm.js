import React, { Component } from "react";
import "./updates.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class UpdatesForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, bgcolor: "rgba(0,0,255,.03)" };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Card className="ufCard">
          <CardHeader style={{ cursor: "pointer" }} onClick={this.toggle}>
            Add an Update (Click Me){" "}
            {!this.state.collapse ? (
              <i className="fa fa-caret-down" />
            ) : (
              <i className="fa fa-caret-up" />
            )}
          </CardHeader>
          <Collapse isOpen={this.state.collapse} className="shadow-lg">
            <CardBody>
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    id="title"
                    className="ufTitle"
                  />
                  <Input
                    type="textarea"
                    name="updateContent"
                    id="textarea"
                    className="ufContent"
                  />
                  <button id="button" className="warning subBtn">
                    {" "}
                    Submit{" "}
                  </button>
                </FormGroup>
              </Form>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default UpdatesForm;
