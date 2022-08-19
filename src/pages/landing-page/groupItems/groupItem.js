import { Component } from "react";
import "./groupItem.scss";

class GroupItems extends Component {
  render() {
    console.log("groups:", this.props.groupProduct);
    const { name, id } = this.props.groupProduct;
    return (
      <>
        <div>
          <h2>{name}</h2>
        </div>
      </>
    );
  }
}
export default GroupItems;
