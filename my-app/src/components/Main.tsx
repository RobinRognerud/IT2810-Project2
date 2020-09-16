import React, { Component } from "react";
import Music from "./Music";

export default class Main extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="picture-container">Bilder</div>
        <div className="music1"> musikk</div>
        <div className="text-container">Våre installasjoner</div>
      </div>
    );
  }
}
