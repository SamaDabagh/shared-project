import { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import "./product-information-page.scss";
import ProductInformationContainer from "../product-information-Container/product-information-container";

class ProductInformationPage extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
    };
    console.log(this.state.products);
  }

  componentDidMount() {
    return fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            products: data,
          };
        });
      });
  }

  render() {
    console.log(this.state.products);

    return (
      <>
        <Header />
        <ProductInformationContainer product={this.state.products} />
        <Footer />
      </>
    );
  }
}
export default ProductInformationPage;
