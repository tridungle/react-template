import React, { Component } from "react";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";

// import TitleBar from "./titleBar/TitleBar";
import NavBar from "./Nav/NavBar";
import Body from "./bodyComponents/Body";
import Updates from "./updates/Updates";
import Clock from "./Clock/Clock";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import PreSetup from "./preSetup/preSetup";
import { Row, Col, Button, Input, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import * as dotsLoad from "./dotsLoad.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dotsLoad.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: undefined,
      collection: undefined,
      collectionTitle: undefined,
      titleEditMode: false,
      loading: undefined,
      done: undefined,
      imagesArray: undefined
    };
  }

  componentWillMount() {
    const client = Stitch.defaultAppClient;
    const mongodb = client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    var db = mongodb.db("Infrastructure");
    var collection = db.collection("Apps");
    collection
      .find({})
      .asArray()
      .then(details => {
        var strDet = details[0];
        this.setState({ collection: strDet, collectionTitle: strDet.title });
      });
  }

  componentDidMount() {
    fetch("https://agamimstorageapi.azurewebsites.net/container/template")
      .then(response => response.json())
      .then(json => {
        this.setState({ imagesArray: json });
      });
  }

  handleEditClick() {
    this.setState({ titleEditMode: !this.state.titleEditMode });
  }

  render() {
    if (this.state.imagesArray) {
      var imagesElements = [];
      for (var i = 0; i < this.state.imagesArray.length; i++) {
        imagesElements.push(
          <img src={this.state.imagesArray[i]} alt="imageme" />
        );
      }
    }
    return (
      <div>
        {this.state.collection ? (
          <div>
            <Row>
              <Col
                xs="2"
                style={{
                  paddingTop: "143px",
                  paddingRight: "15px",
                  paddingLeft: "30px",
                  height: "100vh",
                  // borderRight: "1px solid white",
                  background: "#bdc3c7",
                  background:
                    "-webkit-linear-gradient( to top, #2c3e50, #bdc3c7)",
                  background: "linear-gradient(to top, #2c3e50, #bdc3c7)"
                }}
              >
                <NavBar />
              </Col>

              <Col xs="10" className="body">
                {/* Conditional Render for Title from  */}

                <Row style={{ justifyContent: "center" }}>
                  <Col xs="8">
                    {this.state.titleEditMode === true ? (
                      <Form
                        onSubmit={event => {
                          event.preventDefault();
                          const client = Stitch.defaultAppClient;
                          const mongodb = client.getServiceClient(
                            RemoteMongoClient.factory,
                            "mongodb-atlas"
                          );
                          var db = mongodb.db("Infrastructure");
                          var collection = db.collection("Apps");
                          collection
                            .findOneAndUpdate(
                              { appName: this.state.collection.appName },
                              { $set: { title: this.state.titleValue } }
                            )
                            .then(() => {
                              collection
                                .find({})
                                .asArray()
                                .then(details => {
                                  var strDet = details[0];
                                  this.setState({
                                    collectionTitle: strDet.title,
                                    titleEditMode: false,
                                    titleValue: undefined
                                  });
                                });
                            });
                        }}
                      >
                        <Input
                          type="text"
                          style={{ marginTop: "15px" }}
                          autoFocus
                          onChange={e => {
                            this.setState({ titleValue: e.target.value });
                          }}
                        />
                        <Button type="submit" />
                      </Form>
                    ) : (
                      <div
                        style={{
                          margin: "50px"
                        }}
                      >
                        <h1
                          onClick={this.handleEditClick.bind(this)}
                          style={{ color: "#FFBB87" }}
                        >
                          {this.state.collection
                            ? this.state.collectionTitle
                            : ""}
                        </h1>
                      </div>
                    )}
                    <Updates
                      updates={
                        this.state.collection
                          ? this.state.collection.updates
                          : ""
                      }
                      appName={this.state.collection.appName}
                    />
                  </Col>

                  <Col xs="2" style={{ marginTop: "143px" }}>
                    <Clock />
                    <Body style={{ textAlign: "center" }} />
                  </Col>
                </Row>
              </Col>
            </Row>{" "}
          </div>
        ) : (
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              <Lottie options={defaultOptions} height={1200} width={1200} />
            </div>
          </FadeIn>
          // <PreSetup />
        )}
        {imagesElements}
      </div>
    );
  }
}
