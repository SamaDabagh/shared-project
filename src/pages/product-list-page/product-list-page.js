import { useEffect, useState } from "react";
import "./product-list-page.scss";
import PIPItemInfos from "./PLP-ItemInfos/PLP-ItemInfos";
import PIPGroupItems from "../landing-page/groupItems/groupItems";
import { useParams } from "react-router-dom";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

const ProductListPage = (props) => {
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState({});
  const { code } = useParams();

  useEffect(() => {
    fetch(URL_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    fetch(URL_GROUPS_API)
      .then((response) => response.json())
      .then((groups) => {
        setGroups(groups);
      });
  }, []);

  const temp = Object.values(products);
  const productsKeys = Object.keys(products);
  const productsInfo = temp.map((element, index) => {
    return { ...element, id: `${productsKeys[index]}` };
  });

  // console.log("productsInfo ---->", productsInfo);
  const filteredProducts = productsInfo?.filter((productInfo) => {
    // console.log("productInfo ======>", productInfo);
    // console.log("productInfo.group ======>", typeof productInfo.group);
    // console.log("code ======>", typeof code);

    // productInfo.group === gr
    //   ? console.log("selected-productInfo======>", productInfo)
    //   : console.log("selected-productInfo======>", "Noting");
    if (productInfo.group === +code) {
      return productInfo;
    }
  });

  // console.log("filteredProducts ======>", filteredProducts);

  const filteredGroup = groups.find((group) => {
    const { name, id } = group;
    if (id === +code) return group;
  });
  // console.log("filteredGroup ======>", filteredGroup?.name);

  return (
    <div className="PLP-border-wrapper">
      <div className="PLP-container">
        <div className="container-GroupItems">
          {filteredGroup && <PIPGroupItems groupOfProduct={filteredGroup} />}
        </div>

        <section className="PLP-wrapper">
          <div
            key={filteredProducts.id}
            className="PLP-container-GroupItemsList"
          >
            {filteredProducts.map((filteredProduct) => {
              const { name, price, imageUrl, id } = filteredProduct;

              return (
                <div className="PLP-card--container" key={id}>
                  <PIPItemInfos
                    key={filteredProducts.id}
                    nameOfItem={name}
                    PriceOfItem={price}
                    imageOfItem={imageUrl}
                    idOfItem={id}
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
