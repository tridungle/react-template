import React, { Component } from "react";
import axios from "axios";
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
      collapse: false,
      selectedFile: null,
      loaded: undefined
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8080/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };

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
                <Form id="upload-form">
                  <Input
                    type="file"
                    name="file"
                    onChange={this.onChangeHandler}
                  />
                  <Input type="text" placeholder="filename" />
                  <Button onClick={this.onClickHandler} />
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
