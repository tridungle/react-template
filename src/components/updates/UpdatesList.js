import React from "react";
import { Row, Col } from "reactstrap";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import moment from "moment/min/moment-with-locales";

export default class UpdatesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    const client = Stitch.defaultAppClient;
    const mongodb = client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    var db = mongodb.db("Infrastructure");
    var collection = db.collection("Apps");
    collection
      .find({ appName: this.props.appName })
      .asArray()
      .then(results => {
        var myPosts = results[0].posts;
        this.setState({ posts: myPosts });
      });

    return (
      <div>
        <Row>
          <Col>
            {this.state.posts
              ? this.state.posts.map(update => {
                  return (
                    <div className="container">
                      <p
                        style={{
                          textAlign: "left",
                          color: "gray",
                          padding: "0px",
                          margin: "0px",
                          fontSize: "14px"
                        }}
                      >
                        {moment(update.date)
                          .locale("he")
                          .fromNow()}
                      </p>
                      <h5
                        style={{
                          marginBottom: "20px"
                        }}
                      >
                        {" "}
                        {update.title}{" "}
                      </h5>

                      <p style={{ textAlign: "right" }}> {update.body}</p>
                      <hr />
                    </div>
                  );
                })
              : " "}
          </Col>
        </Row>
      </div>
    );
  }
}
