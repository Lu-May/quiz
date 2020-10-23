import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Store from "./components/Store/Store.js";
import Order from "./components/Order/Order.js";
import Add from "./components/AddProduct/Add.js";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"


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
