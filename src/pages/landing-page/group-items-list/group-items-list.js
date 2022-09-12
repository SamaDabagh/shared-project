import { Component } from "react";
import ItemInfos from "../item-info/item-info";

class GroupItemsList extends Component {
  render() {
    const { productsInfo, index } = this.props;
    const filteredGroup = productsInfo?.filter(
      (product) => product?.group === index
    );
    return (
      <>
        {filteredGroup.map((items) => {
          const { name, price, imageUrl } = items;
          return (
            <div className="card-container-GroupItemsList">
              <ItemInfos
                nameOfItem={name}
                PriceOfItem={price}
                imageOfItem={imageUrl}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default GroupItemsList;
