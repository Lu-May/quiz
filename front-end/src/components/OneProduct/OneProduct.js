import React, {Component} from 'react';
import './OneProduct.css';
import { Button } from "antd";

class OneProduct extends Component {
  render() {
    return (
      <div className="one-product">
        <img src={this.props.imageUrl} alt={this.props.name}/>
        <h4>{this.props.name}</h4>
        <div className="bottom">
          <p>单价：{this.props.price}元/{this.props.unit}</p>
          <Button
            type="primary"
            shape="circle"
            disabled={this.props.isDisabled}
            onClick={() => this.props.onAddProduct(this.props.id)}>+</Button>
        </div>
      </div>
    );
  }
}

export default OneProduct;