import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Card,
  Row,
  Col,
  Label,
  Input,
  FormText,
  Button,
  Collapse
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class reSetup extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron" style={{ marginTop: "200px" }}>
          <Form>
            <FormGroup>
              <Label for="appName">App Name</Label>
              <Input
                type="text"
                name="name"
                id="appName"
                placeholder="App Name"
                autoComplete="none"
                style={{
                  textAlign: "center"
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                Check me out
              </Label>
            </FormGroup>
            <Button>Sign in</Button>
          </Form>
        </div>
      </div>
    );
  }
}
