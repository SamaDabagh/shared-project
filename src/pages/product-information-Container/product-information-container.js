import { Component } from "react";
import "./product-information-container.scss";

class ProductInformationContainer extends Component {
  render() {

    const { product } = this.props;
      return <div> product keys : {product.name}
    </div>;
  }
}

export default ProductInformationContainer;


// const productsArr = Object.keys(product);
// const key = productsArr[0];


//***render***:
// product[key] ? product[key].name : "Loading...."
