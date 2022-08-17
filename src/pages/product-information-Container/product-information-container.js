import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  state = {
    numberValue: 0,
  };
  totalItems = (event) => {
    let { item } = this.props;
    console.log(event.target.value);
    let numberValue = event.target.value;
    this.setState({
      numberValue,
    });
    console.log({ item, numberValue });
    return numberValue;
  };

  render() {
    const { price, name, pricePreFix, canBeSold } = this.props.product;

    return (
      <div className="product-Info-container">
        <div>
          <div className="font-container"> Name : {name}</div>
          <div className="font-container">
            Price({pricePreFix}) : {price}
          </div>
          {canBeSold ? (
            <div className="font-container"> Available </div>
          ) : (
            <div> Unavailable </div>
          )}
          <div>
            <input
              className="counter"
              type="number"
              onChange={this.totalItems}
              placeholder="0"
            />
            <button className="btn-addToCart" onClick={this.AddToCart}>
              Add to cart +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInformationContainer;

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
