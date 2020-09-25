import React, { Fragment } from "react";
import img from "../img/cola.jpg";
import cola2 from "../img/cola2.jpg"
import cola3 from "../img/cola3.jpg"
import cola4 from "../img/cola4.jpg"
import cola5 from "../img/cola5.jpg"
import cola6 from "../img/cola6.jpg"
import "./Store.css";

const Store = () => {
  return (
    <Fragment>
      <div className="product">
        <img src={img} alt="" className="img"></img>
        <p className="name">可乐1</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
      <div className="product">
        <img src={cola2} alt="" className="img"></img>
        <p className="name">可乐2</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
      <div className="product">
        <img src={cola3} alt="" className="img"></img>
        <p className="name">可乐3</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
      <div className="product">
        <img src={cola4} alt="" className="img"></img>
        <p className="name">可乐4</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
      <div className="product">
        <img src={cola5} alt="" className="img"></img>
        <p className="name">可乐5</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
      <div className="product">
        <img src={cola6} alt="" className="img"></img>
        <p className="name">可乐6</p>
        <p className="price">单价：1元/瓶 <button className="button">+</button></p>
      </div>
    </Fragment>
  );
};

export default Store;
