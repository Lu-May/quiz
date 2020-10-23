import React, { Component } from "react";
import OneProduct from "../OneProduct/OneProduct"
import "./Store.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      products: []
    }
  }

  getProducts = () => {
    fetch("/products", { method: 'GET' })
      .then(res => res.json())
      .then(data => { this.setState({ products: data }) })
      .catch(error => console.error(error))
  }

  handleAddProduct = (productId) => {
    let request = new Request("/order", {
      method: 'POST',
      body: JSON.stringify({ "id": null, "productId": productId, "count": 1 }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    this.setState({ isDisabled: true });
    fetch(request)
      .then(() => this.setState({ isDisabled: false }))
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="mall-container">
        {this.state.products.map(product => <OneProduct
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          unit={product.unit}
          imageUrl={product.imageUrl}
          onAddProduct={this.handleAddProduct}
          isDisabled={this.state.isDisabled} />)}
      </div>
    );
  }
}

export default Store;
