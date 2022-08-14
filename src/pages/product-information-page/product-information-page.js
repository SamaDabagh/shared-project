import { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
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
    return fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    const product = this.state.products[this.props.code];

    console.log("result: ", product);

    return (
      <>
        <Header />
        {product ? (
          <ProductInformationContainer product={product} />
        ) : (
          "Loading...."
        )}
        <Footer />
      </>
    );
  }
}
export default ProductInformationPage;
