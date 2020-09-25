import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Store from "../src/components/Store.js";
import Order from "../src/components/Order.js";
import Add from "../src/components/Add.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
        <switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/add" component={Add} />
        </switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
