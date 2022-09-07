import { Component } from "react";
import GroupItems from "./groupItems/groupItems";
import GroupItemsList from "./group-items-list/group-items-list";
import "./landing-page.scss";

const URL_GROUPS_API = "http://localhost:4100/groups";
const URL_PRODUCTS_API = "http://localhost:4000/products";

class LandingPage extends Component {
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

  render() {
    const { groups, products } = this.state;

    const productsInfo = Object.values(products);

    return (
      <div className="border-wrapper-LandingPage">
        {groups.map((group) => {
          return (
            <section className="wrapper-LandingPage" key={group.id}>
              <div className="container-GroupItems">
                <GroupItems groupOfProduct={group} />
              </div>
              <div className="container-GroupItemsList">
                <GroupItemsList productsInfo={productsInfo} index={group.id} />
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}
export default LandingPage;
