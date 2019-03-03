import React from "react";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: "home"
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
        <Menu.Item key="home">HOME -putaniconbyit</Menu.Item>
        <Menu.Item key="menu">LOCATION- putaniconbyit</Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">MENU- putaniconbyit</span>
          }
        >
          <MenuItemGroup title="First Type of Tea">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Second Type of Tea">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="contactus">CONTACTUS - putaniconbyit</Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
