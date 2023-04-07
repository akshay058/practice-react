import React, { Component } from "react";

export default class Comp4 extends Component {
  constructor() {
    console.log("constructor way");
    super();
    this.state = {
      name: "This is class component",
    };
  }
  textchange() {
    this.setState({
      name: "class Changed",
    });
  }
  componentWillMount() {
    console.log("Will Mount here");
  }
  componentDidMount() {
    console.log("Did Mount here");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log(" update condition check");
    return true;
  }
  componentWillUnmount() {
    console.log("component will Unmount");
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.textchange()}>change</button>
      </>
    );
  }
}
