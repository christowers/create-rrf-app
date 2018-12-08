import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "../components/Comments";
import logo from "../logo.svg";
import "../App.css";

class About extends Component {
  onChange = value => {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Comments page="About" {...this.props} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
        </header>
      </div>
    );
  }
}

export default connect(state => state)(About);
