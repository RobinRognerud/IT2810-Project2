import React, { Component } from "react";
import PictureOpt from "./PictureOpt";

export default class Main extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="picture-container">
          Bilder
          <PictureOpt />
        </div>
        <div className="text-container">Våre installasjoner</div>
      </div>
    );
  }
}
