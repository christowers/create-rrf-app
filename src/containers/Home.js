import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "../components/Comments";
import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">Lorem</div>
              <div className="col-md-4">Ipsum</div>
              <div className="col-md-4">Dolor</div>
            </div>
          </div>
          <br />
          <Comments page="Home" {...this.props} />
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

export default connect(state => state)(Home);
