import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("App loads startpage correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const header = wrapper.find("startpage");
  expect(header).toBeTruthy();
});

it("App loads header correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const container = wrapper.find("header");
  expect(container).toBeTruthy();
});

it("App loads main correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const header = wrapper.find("main");
  expect(header).toBeTruthy();
});

it("App loads footer correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const container = wrapper.find("footer");
  expect(container).toBeTruthy();
});

describe("App", () => {
  test("loads without error", () => {
    let element = <App />;

    expect(element).toBeTruthy();
  });
});

describe("App", () => {
  test("render matches snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
