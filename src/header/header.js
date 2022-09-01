import { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <header>
        <div className="header-container">
          <div className="header-grocery-name">
            <div className="header-logo">
              <img
                src="https://www.wexfordbaseball.com/wp-content/uploads/2018/05/logo-metro.png"
                alt="image-logo"
              />
            </div>
            <h1>my grocer</h1>
          </div>
          <div className="header-right-side">
            <div>
              <button className="btn-management">Management</button>
            </div>
            <div className="cart">
              <i></i>
              <button className="btn-cart">Cart {cartItems}</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
