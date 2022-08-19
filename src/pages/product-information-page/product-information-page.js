{/* Line 50, 56, 58 MUST be REMOVED, lines 51 to 55 must be commented in. */}

import { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import LandingPage from "../landing-page/landing-page";
import "./product-information-page.scss";
// import ProductInformationContainer from "../product-information-Container/product-information-container";

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
    tempGroups: [
      {
        name: "Health and beauty",
        id: 1,
      },
      {
        name: "Health and beauty-2",
        id: 2,
      }
    ],
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
    const { code } = this.props;
    const { tempGroups } = this.state;
    console.log('tempGroups in PIP------>: ', tempGroups);

    return (
      <>
        <Header />
        {/* {product ? (
          <ProductInformationContainer product={product} item={code} />
        ) : (
          "Loading...."
        )} */}
        <LandingPage groups={tempGroups} />

        <Footer />
      </>
    );
  }
}
export default ProductInformationPage;
