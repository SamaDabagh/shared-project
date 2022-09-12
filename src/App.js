import { Component } from "react";
import ProductInformationPage from "./pages/product-information-page/product-information-page";
import LandingPage from "./pages/landing-page/landing-page";
import Header from "./header/header";
import Footer from "./footer/footer";
import ProductListPage from "./pages/product-list-page/product-list-page";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  state = { cartItems: null };

  handleAddToCartAmount = (addToCartAmount) => {
    this.setState({ cartItems: addToCartAmount });
  };
  
  render() {
    return (
      <>
        <Header cartItems={this.state.cartItems} />
        <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/products/:id" element={<ProductInformationPage />} />
            <Route path="/groups/:code" element={<ProductListPage />} />

            {/* <ProductListPage gr={6} /> */}
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
