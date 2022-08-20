import { Component } from "react";

class GroupItems extends Component {
  // {
  //   name: "Health and beauty",
  //   id: 1,
  // } --> props.groupProduct

  // Dafeye BAD

  // {
  //   name: "Health and beauty-2",
  //   id: 2,
  // }

  render() {
    console.log("props in groupItem :", this.props);
    const { name, id } = this.props.groupOfProduct;
    return (
      <>
        <div>
          <h2>Name: {name}</h2>
          <p>Id: {id}</p>
        </div>
      </>
    );
  }
}
export default GroupItems;
