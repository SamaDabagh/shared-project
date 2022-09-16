import GroupItems from "./groupItems/groupItems";
import GroupItemsList from "./group-items-list/group-items-list";
import "./landing-page.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

const LandingPage = () => {
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState({});
  const { code } = useParams();

  // console.log(id);
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

  return (
    <div className="border-wrapper-LandingPage">
      {groups.map((group) => {
        return (
          <section className="wrapper-LandingPage" key={group.id}>
            <Link className="container-GroupItems" to={`/groups/${group.id}`}>
              <GroupItems groupOfProduct={group} />
            </Link>
            <div className="container-GroupItemsList">
              <GroupItemsList index={group.id} products={products} />
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default LandingPage;
