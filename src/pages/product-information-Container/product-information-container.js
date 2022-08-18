import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  
  numberOfItems2 = 0;

  handleIncreaseButton = (event) => {
    this.numberOfItems2 = event.target.value;
  };

  handleAddToCart = () => {
    const { item } = this.props;
    console.log({
      item: item,
      code: this.numberOfItems2
    });
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
              onChange={this.handleIncreaseButton}
              placeholder="0"
              min={0}
            />
            <button className="btn-addToCart" onClick={this.handleAddToCart}>
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
