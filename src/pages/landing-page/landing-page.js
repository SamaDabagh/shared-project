import { Component } from "react";
import GroupItems from "../landing-page/groupItems/groupItems";
import GroupItemsList from "./group-items-list/group-items-list";

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

    const filteredGroup = productsInfo?.filter(
      (product) => product?.group === 1
    );

    console.log(
      "productsInfo in LANDING PAGE------>: ",
      Object.values(products)
    );

    console.log("filteredGroup in LANDING PAGE------>: ", filteredGroup);
    console.log("groups in LANDING PAGE------>: ", groups);
    console.log("products in LANDING PAGE------>: ", products);

    return (
      <>
        <GroupItems groupOfProduct={groups} />

        <GroupItemsList sameGroupItems={filteredGroup} />
      </>
    );
  }
}
export default LandingPage;
