import React, { Fragment } from "react";
import { Component } from "react";
import "./Add.css"

class Add extends Component {
  state = {
    name: "",
    price: "",
    unit: "",
    img: "",
  };

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value,
    });
  }

  handleUnitChange(event) {
    this.setState({
      unit: event.target.value,
    });
  }

  handleImgChange(event) {
    this.setState({
      img: event.target.value,
    });
  }

  clickToSubmit() {
    if (
      this.state.name &&
      this.state.price &&
      this.state.unit &&
      this.state.img 
    ) {
      console.log(this.state);
    }
  }
  render() {
    return (
      <Fragment>
        <form>
          <p  className="name">
            <font color="red">*</font>名称
          </p>
          <input
            type="text"
            className="input"
            placeholder="名称"
            onChange={(event) => this.handleNameChange(event)}
            value={this.state.name}
          ></input>

<p  className="name">
            <font color="red">*</font>价格
          </p>
          <input
            type="text"
            className="input"
            placeholder="价格"
            onChange={(event) => this.handlePriceChange(event)}
            value={this.state.price}
          ></input>

<p  className="name">
            <font color="red">*</font>单位
          </p>
          <input
            type="text"
            className="input"
            placeholder="单位"
            onChange={(event) => this.handleUnitChange(event)}
            value={this.state.unit}
          ></input>

<p  className="name">
            <font color="red">*</font>图片
          </p>
          <input
            type="text"
            className="input"
            placeholder="URL"
            onChange={(event) => this.handleImgChange(event)}
            value={this.state.img}
          ></input>
          <button
          type="button"
          onClick={() => this.clickToSubmit()}
          className="btn"
        >
          提交
        </button>
        </form>
      </Fragment>
    );
  }
}

export default Add;
