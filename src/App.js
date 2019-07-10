import React from "react";
import "./App.css";
import Main from "./components/main";
import { Stitch, AnonymousCredential } from "mongodb-stitch-browser-sdk";

Stitch.initializeDefaultAppClient("template-meeyy");
const client = Stitch.defaultAppClient;
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
  //console.log(`logged in anonymously as user ${user.id}`);
});

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
