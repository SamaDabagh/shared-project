import GroupItems from "./groupItems/groupItems";
import GroupItemsList from "./group-items-list/group-items-list";
import "./landing-page.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

const LandingPage = () => {
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState({});

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
  // console.log("products=====>", products);
  const productsInfo = Object.values(products);
  // console.log("productsInfo=====>", productsInfo);

  return (
    <div className="border-wrapper-LandingPage">
      {groups.map((group) => {
        return (
          <section className="wrapper-LandingPage" key={group.id}>
            <Link className="container-GroupItems" to="/groups/:code">
              <GroupItems groupOfProduct={group} />
            </Link>
            <Link className="container-GroupItemsList" to="/products/:id">
              <GroupItemsList productsInfo={productsInfo} index={group.id} />
            </Link>
          </section>
        );
      })}
    </div>
  );
};
export default LandingPage;
