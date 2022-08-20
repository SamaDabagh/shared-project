import { Component } from "react";
import ItemInfos from "../item-info/item-info";

class GroupItemList extends Component {
  render() {
    const { sameGroupItems } = this.props;
    console.log("this.props in GROUP-ITEM-LIST ----->", this.props);
    return (
      <>
        {sameGroupItems.map((sameGroupItem) => {
          const { name, price } = sameGroupItem;
          return <ItemInfos nameOfItem={name} PriceOfItem={price} />;
        })}
      </>
    );
  }
}

export default GroupItemList;
