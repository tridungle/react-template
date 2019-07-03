import React, { Component } from "react";

import TitleBar from "./titleBar/TitleBar";
import NotificationBar from "./notificationBar/NotificationBar";
import NavBar from "./Nav/NavBar";
import Body from "./bodyComponents/Body";
import Updates from "./updates/Updates";
import Clock from "./Clock/Clock";

import { Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Jerusalem"
    };
  }
  render() {
    return (
      <div>
        {/* <Row>
          <Weather city={this.state.city} />
        </Row> */}

        <Row className="fullRow">
          <Col>
            <NotificationBar style={{ width: "100%" }} />
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs="2">
            <NavBar />
            <Button onClick={() => this.setState({ city: "Chicago" })}>
              Chicago
            </Button>
            <Button onClick={() => this.setState({ city: "Belo Horizonte" })}>
              Belo Horizonte
            </Button>
          </Col>

          <Col xs="10" className="body">
            <h1 style={{ marginTop: "15px" }}> Title Goes Here</h1>

            <hr />
            <Row>
              <Col xs="9">
                <Updates />
              </Col>

              <Col xs="2">
                <Clock />
                <Body style={{ textAlign: "center" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
