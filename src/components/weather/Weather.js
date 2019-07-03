import React, { Component } from "react";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
  }
  componentDidMount() {
    console.log("weather mounted.");
  }

  componentWillReceiveProps() {
    let key = "af92f6464cf2f752078d97aa90d45e5a";
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.city +
        "&appid=" +
        key
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    return <div>{this.state.data ? <h1>{this.state.data.name}</h1> : ""}</div>;
  }
}
