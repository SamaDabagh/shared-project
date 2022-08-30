import { Component } from "react";
import "./item-infos.scss";

class ItemInfos extends Component {
  handleOnMouseOver = (event) => {
    this.onHover(event);
  };
  render() {
    const { nameOfItem, PriceOfItem } = this.props;
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
        <img className="card-image-ItemInfos" src="" alt="product-Image" />
      </div>
    );
  }
}

export default ItemInfos;
