import { useState, useEffect } from "react";
import "./product-information-page.scss";
import ProductInformationContainer from "../product-information-Container/product-information-container";
import {useParams} from 'react-router-dom';

const ProductInformationPage = (props) => {

  const [products, setProducts] = useState({});

  const { id } = useParams();

  useEffect( () => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  const { handleAddToCartAmount } = props;
  const product = products[id];

    return (
      <>
        {
        product ? (
          <ProductInformationContainer
            product={product}
            item={id}
            handleAddToCartAmount={handleAddToCartAmount}
          />
        ) : (
          "Loading...."
        )}
      </>
    );
}

export default ProductInformationPage;
