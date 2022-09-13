import { Component } from "react";
import "./product-information-container.scss";
import "../../sass/_variables.scss";

class PIC extends Component {
  numberOfItems2 = 0;

  handleIncreaseButton = (event) => {
    this.props.product.canBeSold && event.target.value <= 5
      ? (this.numberOfItems2 = +event.target.value)
      : (this.numberOfItems2 = 5) && alert(`You can add Max ${5} items`);
  };

  handleAddToCart = () => {
    const { item } = this.props;

    this.props.handleAddToCartAmount(this.numberOfItems2);
    console.log({
      item: item,
      code: this.numberOfItems2,
    });
  };

  render() {
    const { price, name, pricePreFix, canBeSold, imageUrl } =
      this.props.product;

    return (
      <>
        <div className="container-PIC">
          <div>
            <div>
              <h1 className="productName-PIC">
                <span> Product :</span> {name}
              </h1>
            </div>
            <br />
            <br />
            <h2 className="productPrice-PIC">
              <span>Price({pricePreFix}) :</span> {price}
            </h2>
            {canBeSold ? (
              <div className="productAvailability-PIC">Available</div>
            ) : (
              <div> Unavailable </div>
            )}
            <br />
            <br />
            <div className="input-btn-container-PIC">
              <input
                className="counter-PIC"
                type="number"
                onChange={this.handleIncreaseButton}
                placeholder="0"
                min={0}
              />
              {canBeSold ? (
                <button
                  className="btn-addToCart"
                  onClick={this.handleAddToCart}
                >
                  Add to cart +
                </button>
              ) : (
                <button
                  className="btn-addToCart-disabled"
                  onClick={this.handleAddToCart}
                  disable
                >
                  Add to cart +
                </button>
              )}
            </div>
          </div>

          <div className="wrapper-image-PIC">
            <img src={imageUrl} alt="product-image" className="image-PIC" />
          </div>
        </div>
        <div>
          <p className="image-PIC"></p>
        </div>
      </>
    );
  }
}

export default PIC;

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
