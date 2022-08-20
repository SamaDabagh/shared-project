import { Component } from "react";

class ItemInfos extends Component {
  render() {
    const { nameOfItem, PriceOfItem } = this.props;
    console.log("this.props.nameOfItem in ITEM-INFOS ---->", nameOfItem);
    return (
      <>
        <div>{nameOfItem}</div>
        <div>{PriceOfItem}</div>
      </>
    );
  }
}

export default ItemInfos;
