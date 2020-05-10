import React, { Component } from "react";

export default class basicHero extends Component {
  render() {
    return (
      <div className="basichero">
        <div className="inner">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
