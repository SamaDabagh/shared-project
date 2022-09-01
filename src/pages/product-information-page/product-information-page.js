{
  /* Line 50, 56, 58 MUST be REMOVED, lines 51 to 55 must be commented in. */
}

import { Component } from "react";
import "./product-information-page.scss";
import ProductInformationContainer from "../product-information-Container/product-information-container";

class ProductInformationPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: {},
  //   };
  //   console.log(this.state.products);
  //   console.log("this.props: ", this.props.code);
  // }

  state = {
    products: {},
  };

  componentDidMount() {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    const product = this.state.products[this.props.code];
    const { code, handleAddToCartAmount } = this.props;

    return (
      <>
        {product ? (
          <ProductInformationContainer
            product={product}
            item={code}
            handleAddToCartAmount={handleAddToCartAmount}
          />
        ) : (
          "Loading...."
        )}
      </>
    );
  }
}
export default ProductInformationPage;
