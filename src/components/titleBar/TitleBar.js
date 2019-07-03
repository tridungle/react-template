import React from "react";
import "./titlebar.css";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="weather">
        {/* <ReactWeather
          forecast="today"
          type="city"
          city={this.props.city}
          apikey="afd9040ff6154b20a17130131190207"
        /> */}
        <h1 style={{ textAlign: "center" }}>{this.props.city}</h1>
      </div>
    );
  }
}
