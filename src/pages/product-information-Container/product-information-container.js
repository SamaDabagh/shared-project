import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  state = {
    numberOfItems: 0,
    countOfWantedItems: 0,
  };

  handleTotalItems = (event) => {
    const { item } = this.props;

    let countOfWantedItems = event.target.value;
    this.setState({
      countOfWantedItems,
    });
    console.log({ item, countOfWantedItems });
    // return countOfWantedItems;
  };
  handleAddToCart = () => {
    const { item } = this.props;
    let { numberOfItems } = this.state;
    ++numberOfItems;
    this.setState({
      numberOfItems: numberOfItems,
    });

    console.log({ item, numberOfItems });
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
              onChange={this.handleTotalItems}
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
