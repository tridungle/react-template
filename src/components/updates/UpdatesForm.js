import React, { Component } from "react";
import "./updates.css";
import "bootstrap/dist/css/bootstrap.css";

import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";

import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class UpdatesForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      bgcolor: "#B9A89A",
      postTitle: "",
      postContent: ""
    };
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
              <Form
                onSubmit={event => {
                  event.preventDefault();
                  if (
                    this.state.postTitle !== "" &&
                    this.state.postContent !== ""
                  ) {
                    const client = Stitch.defaultAppClient;
                    const mongodb = client.getServiceClient(
                      RemoteMongoClient.factory,
                      "mongodb-atlas"
                    );
                    var db = mongodb.db("Infrastructure");
                    var collection = db.collection("Apps");
                    collection
                      .findOneAndUpdate(
                        { appName: this.props.appName },
                        {
                          $push: {
                            posts: {
                              title: this.state.postTitle,
                              body: this.state.postContent,
                              date: new Date()
                            }
                          }
                        }
                      )
                      .then(() => {
                        this.setState({
                          postTitle: "",
                          postContent: "",
                          collapse: !this.state.collapse
                        });
                      });
                  }
                }}
              >
                <FormGroup>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.postTitle}
                    id="title"
                    className="ufTitle"
                    autoComplete="off"
                    onChange={e => {
                      this.setState({ postTitle: e.target.value });
                    }}
                  />
                  <Input
                    type="textarea"
                    name="updateContent"
                    id="textarea"
                    className="ufContent"
                    value={this.state.postContent}
                    onChange={e => {
                      this.setState({ postContent: e.target.value });
                    }}
                  />
                  <button id="button" className="warning subBtn">
                    Submit
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
