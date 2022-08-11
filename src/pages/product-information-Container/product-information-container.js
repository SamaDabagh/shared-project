import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  render() {
    const productsArr = Object.keys(this.props.product);
    console.log(productsArr);
    return <div> {[productsArr[0]]}</div>;
  }
}

export default ProductInformationContainer;
