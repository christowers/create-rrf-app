import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Home from "./containers/Home";
import About from "./containers/About";
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
