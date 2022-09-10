import { Component } from "react";
import "./PLP-GroupItems.scss";

class PLPGroupItems extends Component {
  render() {
    const { name, id } = this.props.groupOfProduct;
    return (
      <div className="PLP-wrapper-GroupItems">
        <img src="" alt="PLP_groups-image" className="PLP-image-GroupItems" />
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
export default PLPGroupItems;
