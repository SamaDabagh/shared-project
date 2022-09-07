import { Component } from "react";
import ProductInformationPage from "./pages/product-information-page/product-information-page";
import LandingPage from "./pages/landing-page/landing-page";
import Header from "./header/header";
import Footer from "./footer/footer";
import ProductListPage from "./pages/product-list-page/product-list-page";

class App extends Component {
  state = { cartItems: null };

  handleAddToCartAmount = (addToCartAmount) => {
    this.setState({ cartItems: addToCartAmount });
  };

  render() {
    return (
      <div className="App">
        <Header cartItems={this.state.cartItems} />

        {/* <ProductInformationPage
          code="1002"
          handleAddToCartAmount={this.handleAddToCartAmount}
        /> */}
        {/* <LandingPage /> */}
        <ProductListPage gr={4} />

        <Footer />
      </div>
    );
  }
}

export default App;
