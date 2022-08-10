import { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import "./product-information-page.scss";

class ProductInformationPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="pip-container">I am ProductInformationPage</div>
        <Footer />
      </>
    );
  }
}
export default ProductInformationPage;
