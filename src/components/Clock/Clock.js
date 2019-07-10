import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./clock.css";
import "bootstrap/dist/css/bootstrap.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="clock shadow-sm">
        <Moment format="DD/MM/YYYY HH:mm:ss" tz="America/New_York" />
      </div>
    );
  }
}
