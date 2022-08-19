import { Component } from "react";
import GroupItems from "../landing-page/groupItems/groupItem";

class LandingPage extends Component {
  render() {
    const { groups } = this.props;
    console.log('tempGroups in LANDING PAGE------>: ', groups);

    return (
      <>
        {

          // [{
          //   name: "Health and beauty",
          //   id: 1,
          // },
          // {
          //   name: "Health and beauty-2",
          //   id: 2,
          // }] ---> groups
          groups.map((group) => {
            console.log("group.id in LANDING PAGE------>: ", group.id);
            console.log("group.name in LANDING PAGE------>: ", group.name);
            return <GroupItems group={group} key={group.id} />;
          })
        }
      </>
    );
  }
}
export default LandingPage;
