import * as React from "react";
import "./StartPage.css";

export default class Hello extends React.Component<{}> {
  private helloRef = React.createRef<HTMLDivElement>();

  public render() {
    return (
      <div className="startPage">
        <h1 className="welcome-text">Welcome to our gallery</h1>
        {/* https://codepen.io/postor/pen/mskxI */}
        <div className="arrow-div">
          {" "}
          <svg className="arrows">
            <g
              onClick={() => {
                if (this.helloRef && this.helloRef.current) {
                  this.helloRef.current.scrollIntoView();
                }
              }}
            >
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </g>
          </svg>
        </div>

        <div>
          <div ref={this.helloRef}></div>
        </div>
      </div>
    );
  }
}
