import React, { Component } from "react";
import "./BtBurgercss.scss";
import { connect } from "react-redux";

class BtBurger extends Component {
  ///////////////////////
  renderBurger = () => {
    const { burger } = this.props;
    return Object.entries(burger).map(([key, value], index) => {
      const contentHtml = [];
      for (let i = 0; i < value; i++) {
        contentHtml.push(<div className={key} key={index}></div>);
      }
      return contentHtml;
    });
  };
  ///////////////////////
  renderMenu = () => {
    const { menu, burger, changeAmount } = this.props;
    return Object.entries(menu).map(([key, value], index) => {
      return (
        <tr key={index}>
          <td>{key}</td>
          <td>
            <button
              className="btn btn-success mx-2"
              onClick={() => changeAmount(key, -1)}
            >
              -
            </button>
            {burger[key]}
            <button
              className="btn btn-success mx-2"
              onClick={() => changeAmount(key, 1)}
            >
              +
            </button>
          </td>
          <td>{value}</td>
          <td> {burger[key] * value} </td>
        </tr>
      );
    });
  };
  render() {
    const { total } = this.props;

    return (
      <div className="container">
        <h2>Bài tập Burger-redux</h2>
        <hr />
        <div className="row">
          <div className="col-7">
            <h3>Burger của bạn</h3>
            <hr />
            <div className="burger-Top"></div>
            {this.renderBurger()}
            <div className="burger-Bottom"></div>
          </div>
          <div className="col-5">
            <h3>Lựa chọn của bạn</h3>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th>Sản Phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Tổng tiền:</td>
                  <td>{total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (key, amount) => {
      const action = {
        type: "CHANGE_AMOUNT",
        key,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BtBurger);
