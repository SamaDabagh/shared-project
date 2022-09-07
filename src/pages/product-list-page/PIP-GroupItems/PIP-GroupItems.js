import { Component } from "react";
import "./PIP-GroupItems.scss";

class PIPGroupItems extends Component {
  render() {
    const { name, id } = this.props.groupOfProduct;
    return (
      <div className="PIP-wrapper-GroupItems">
        <img src="" alt="PIP_groups-image" className="PIP-image-GroupItems" />
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
export default PIPGroupItems;
