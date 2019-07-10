import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, CardHeader } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Card className="shadow">
        <CardHeader>Navigation</CardHeader>
        <CardBody>
          <a>
            <i className="fa fa-home" /> Homepage
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default NavBar;
