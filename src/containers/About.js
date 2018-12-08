import React, { Component } from "react";
import InputPreview from "../components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "../actions/message";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

class About extends Component {
  onChange = value => {
    this.props.dispatch(setMessage(value));
  };
  render() {
    const { message } = this.props.messageReducer;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <InputPreview value={message} onChange={this.onChange} />
          <Link to="/">
            <button>Go Home</button>
          </Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(state => state)(About);
