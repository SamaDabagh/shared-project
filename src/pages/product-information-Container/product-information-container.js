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
      code: this.numberOfItems2,
    });
  };

  render() {
    const { price, name, pricePreFix, canBeSold } = this.props.product;

    return (
      <>
        <div className="container-ProductInformationContainer">
          <div>
            <div>
              <h1 className="productName-ProductInformationContainer">
                <span> Product :</span> {name}
              </h1>
            </div>
            <br />
            <br />
            <h2 className="productPrice-ProductInformationContainer">
              <span>Price({pricePreFix}) :</span> {price}
            </h2>
            {canBeSold ? (
              <div className="productAvailability-ProductInformationContainer">
                Available
              </div>
            ) : (
              <div> Unavailable </div>
            )}
            <br />
            <br />
            <div>
              <input
                className="counter-ProductInformationContainer"
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

          <div className="wrapper-image-ProductInformationContainer">
            <img
              src=""
              alt="product-image"
              className="image-ProductInformationContainer"
            />
          </div>
        </div>
        <div>
          <p className="image-ProductInformationContainer"></p>
        </div>
      </>
    );
  }
}

export default ProductInformationContainer;

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
