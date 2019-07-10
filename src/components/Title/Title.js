import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

class Title extends Component {
    handleClickOutside = event => {

    }
    render() {
        return (
            <div>
                {this.state.titleEditMode == true ? (
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
                            collectionTitle: strDet.itle,
                            titleEditMode: false
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
              <h1
                style={{ marginTop: "15px" }}
                onClick={this.handleEditClick.bind(this)}
              >
                {this.state.collection ? this.state.collectionTitle : ""}
              </h1>
            )}

            <hr />
            </div>
        )
    }
}

export default onClickOutside(Title)