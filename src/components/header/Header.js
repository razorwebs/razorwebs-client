import React, { Component } from "react";
import Menu from "../menu/Menu";
import { Container } from "semantic-ui-react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container fluid>
          <Menu />
        </Container>
      </div>
    );
  }
}
