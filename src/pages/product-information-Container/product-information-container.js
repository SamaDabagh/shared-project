import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  render() {
    const { price, name, pricePreFix, canBeSold } = this.props.product;

    return (
      <div className="product-Info-container">
        <div className="font-container"> Name : {name}</div>
        <div className="font-container">
          Price({pricePreFix}) : {price}
        </div>
        {canBeSold ? (
          <div className="font-container"> Available </div>
        ) : (
          <div> Unavailable </div>
        )}
      </div>
    );
  }
}

export default ProductInformationContainer;

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
