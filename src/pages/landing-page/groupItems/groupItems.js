import { Component } from "react";
import "./groupItems.scss";

class GroupItems extends Component {
  render() {
    const { name, id } = this.props.groupOfProduct;
    return (
      <div className="wrapper-GroupItems">
        <img src="" alt="groups-image" className="image-GroupItems" />
        <h1>
          {name}
          <span>
            <i></i>
          </span>
        </h1>
      </div>
    );
  }
}
export default GroupItems;
