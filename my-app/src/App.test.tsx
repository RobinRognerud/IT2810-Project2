import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

it("App loads main correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const main = wrapper.find("Main");
  expect(main).toBeTruthy();
});

it("App loads darkmodeButton correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const darkmodeButton = wrapper.find("DarkmodeButton");
  expect(darkmodeButton).toBeTruthy();
});

it("App loads footer correctly", () => {
  const wrapper = Enzyme.mount(<App />);
  const footer = wrapper.find("Footer");
  expect(footer).toBeTruthy();
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
