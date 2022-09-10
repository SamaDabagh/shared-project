import { Component } from "react";
import "./PLP-ItemInfos.scss";

class PLPItemInfos extends Component {
  render() {
    const { nameOfItem, PriceOfItem, imageOfItem } = this.props;
    return (
      <div
        className="card-content-ItemInfos"
        onMouseOver={this.handleOnMouseOver}
      >
        <div className="card-body-ItemInfos">
          <div>
            <h3>{nameOfItem}</h3>
          </div>
          <div>
            <p>Price : {PriceOfItem}</p>
          </div>
        </div>
        <img
          className="card-image-ItemInfos"
          src={imageOfItem}
          alt="product-Image"
        />
      </div>
    );
  }
}

export default PLPItemInfos;
