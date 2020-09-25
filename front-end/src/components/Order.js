import React, { Fragment } from "react";
import "./Order.css"

const Order = () => {
  return (
    <Fragment>
      <table className="tableLine">
        <tr className="orderHead">
          <td className="inTable">名字</td>
          <td className="inTable">单价</td>
          <td className="inTable">数量</td>
          <td className="inTable">单位</td>
          <td className="inTable">操作</td>
        </tr>
      </table>
    </Fragment>
  );
};

export default Order;
