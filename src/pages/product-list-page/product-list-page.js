import { Component } from "react";
import "./product-list-page.scss";
import PIPItemInfos from "./PLP-ItemInfos/PLP-ItemInfos";
import PIPGroupItems from "../landing-page/groupItems/groupItems";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

class ProductListPage extends Component {
  state = {
    groups: [],
    products: {},
  };

  componentDidMount() {
    fetch(URL_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
    fetch(URL_GROUPS_API)
      .then((response) => response.json())
      .then((groups) => {
        this.setState({ groups });
      });
  }

  render = () => {
    const { groups, products } = this.state;
    const { gr } = this.props;
    // console.log("gr ---->", gr);

    // console.log("groups ---->", groups);
    // console.log("products ---->", products);
    const productsInfo = Object.values(products);
    // console.log("productsInfo ---->", productsInfo);
    const filteredProducts = productsInfo.filter((productInfo) => {
      // console.log("productInfo ======>", productInfo);
      // console.log("productInfo.group ======>", productInfo.group);
      // productInfo.group === gr
      //   ? console.log("selected-productInfo======>", productInfo)
      //   : console.log("selected-productInfo======>", "Noting");
      if (productInfo.group === gr) {
        return productInfo;
      }
    });

    // console.log("filteredProducts ======>", filteredProducts);

    const filteredGroup = groups.filter((group) => {
      const { name, id } = group;
      if (id === gr) return group;
    });
    // console.log("filteredGroup ======>", filteredGroup[0]?.name);

    return (
      <div className="PLP-border-wrapper">
        <div className="PLP-container">
          <div className="container-GroupItems">
            {filteredGroup[0] && (
              <PIPGroupItems groupOfProduct={filteredGroup[0]} />
            )}
          </div>

          <section className="PLP-wrapper">
            <div
              key={filteredProducts.id}
              className="PLP-container-GroupItemsList"
            >
              {filteredProducts.map((filteredProduct) => {
                const { name, price, imageUrl } = filteredProduct;

                return (
                  <div className="PLP-card--container">
                    <PIPItemInfos
                      nameOfItem={name}
                      PriceOfItem={price}
                      imageOfItem={imageUrl}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  };
}
export default ProductListPage;
