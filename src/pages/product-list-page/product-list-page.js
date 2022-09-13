import { useEffect, useState } from "react";
import "./product-list-page.scss";
import PIPItemInfos from "./PLP-ItemInfos/PLP-ItemInfos";
import PIPGroupItems from "../landing-page/groupItems/groupItems";
import { useParams } from "react-router-dom";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

const ProductListPage = (props) => {
  console.log("props====>", props);
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState({});
  const { code } = useParams;

  useEffect(() => {
    fetch(URL_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => {
        return setProducts({ products: data });
      });
    fetch(URL_GROUPS_API)
      .then((response) => response.json())
      .then((groups) => {
        return setGroups([groups]);
      });
  }, []);

  console.log("gr ---->", code);

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
    if (productInfo.group === code) {
      return productInfo;
    }
  });
  const group = groups[code];

  // console.log("filteredProducts ======>", filteredProducts);

  const filteredGroup = groups.filter((group) => {
    const { name, id } = group;
    if (id === code) return group;
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
export default ProductListPage;
