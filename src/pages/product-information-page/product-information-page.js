import { useState, useEffect } from "react";
import "./product-information-page.scss";
import ProductInformationContainer from "../product-information-Container/product-information-container";
import { useParams } from "react-router-dom";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

const ProductInformationPage = ({ handleAddToCartAmount }) => {
  const [products, setProducts] = useState({});
  const [groups, setGroups] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(URL_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => setProducts(data));

    fetch(URL_GROUPS_API)
      .then((response) => response.json())
      .then((groups) => {
        setGroups(groups);
      });
  }, []);

  const product = products[id];

  const group = groups.find((item) => {
    if (item.id === product.group) return item;
  });
  return (
    <>
      {product ? (
        <ProductInformationContainer
          product={product}
          group={group}
          item={id}
          handleAddToCartAmount={handleAddToCartAmount}
        />
      ) : (
        "Loading...."
      )}
    </>
  );
};

export default ProductInformationPage;
