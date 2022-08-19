import { Component } from "react";
import "./landing-page.scss";
import GroupItems from "../landing-page/groupItems/groupItem";

class LandingPage extends Component {
  render() {
    const { groups } = this.props;
    return (
      <>
        {groups.map((group) => {
          console.log("group.id: ", group.id);
          console.log("group.name: ", group.name);
          <GroupItems groupProduct={group} key={group.id} />;
        })}
      </>
    );
  }
}
export default LandingPage;
