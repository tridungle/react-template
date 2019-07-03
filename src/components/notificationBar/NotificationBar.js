import React, { Component } from "react";
import "./notification.css";
import { Row, Col, Collapse, Card } from "reactstrap";

export default class NotificationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
      collapse: false,
      bgcolor: "rgba(0,0,255,.03)"
    };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div>
        <Row className="Row">
          <Col>
            <span id="icons" onClick={this.toggle}>
              <i className="fa fa-bell fa-fw" />{" "}
              <i className="fa fa-caret-down" />
            </span>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <h1> Notifications go here </h1>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}
