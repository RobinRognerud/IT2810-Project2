import React, { Component } from "react";

interface pictureProp {
  pictureNr: string;
}

interface State {
  pictureNo: string;
}

export default class PictureOptions extends React.Component<
  pictureProp,
  State
> {
  constructor(props: pictureProp) {
    super(props);
    this.state = {
      pictureNo: "Nr1",
    };
  }
  clicked = () => {
    alert("It worked!");
    /*
        The 'this' keyword refers to the component object
        */
  };

  render() {
    return (
      <div id="product-options">
        <div id="picture-category">
          <label>
            Choice 1:
            <input
              name="pictureNr"
              type="radio"
              value="Nr1"
              checked={"Nr1" === this.state.pictureNo}
              onChange={(e) => {
                this.setState({ pictureNo: e.target.value });
              }}
            />
          </label>
          <label>
            Choice 2:
            <input
              name="pictureNr"
              type="radio"
              value="Nr2"
              checked={"Nr2" === this.state.pictureNo}
              onChange={(e) => {
                this.setState({ pictureNo: e.target.value });
              }}
            />
          </label>
          <label>
            Choice 3:
            <input
              name="pictureNr"
              type="radio"
              value="Nr3"
              checked={"Nr3" === this.state.pictureNo}
              onChange={(e) => {
                this.setState({ pictureNo: e.target.value });
              }}
            />
          </label>
        </div>
        <div>Output: {JSON.stringify(this.state.pictureNo)}</div>
      </div>
    );
  }
}
