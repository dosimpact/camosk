import React from "react";
import { Link } from "react-router-dom"

import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/">홈페이지</Link>
      </Menu.Item>
      <Menu.Item key="adpage">
        <Link to="/adpage">광고페이지</Link>
      </Menu.Item>
      <Menu.Item key="blog">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="create">
        <Link to="/blog/create">Create</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
