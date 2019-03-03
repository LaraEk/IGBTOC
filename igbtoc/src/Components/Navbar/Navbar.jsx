import React from "react";
import { Menu, Icon } from "antd";
import "../../styles//appstyles.scss";

class Navbar extends React.Component {
  state = {
    current: "tea"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="itsamenu"
      >
        <Menu.Item key="home">
          <Icon type="rest" />
          HOME
        </Menu.Item>
        <Menu.Item key="menu">
          <Icon type="car" />
          LOCATION
        </Menu.Item>
        <Menu.Item key="tea">
          <Icon type="coffee" />
          TEA 
        </Menu.Item>
        <Menu.Item key="contactus">
          <Icon type="global" />
          CONTACT
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
