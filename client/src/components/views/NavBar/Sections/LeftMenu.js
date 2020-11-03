import React from "react";
import { Link } from "react-router-dom"

import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="home">
        <Link to="/">홈페이지</Link>
      </Menu.Item> */}
      {/* <Menu.Item key="adpage">
        <Link to="/adpage">광고페이지</Link>
      </Menu.Item> */}
      {/* <Menu.Item key="blog">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="create">
        <Link to="/blog/create">Create</Link>
      </Menu.Item>
      <Menu.Item key="test">
        <Link to="/test">Test</Link>
      </Menu.Item> */}

      <Menu.Item key="camosk01">
        <Link to="/camosk01">[CAMOSK]승강기 패널</Link>
      </Menu.Item>
      <Menu.Item key="camosk02">
        <Link to="/camosk02">[CAMOSK]매장 패널</Link>
      </Menu.Item>
      <Menu.Item key="camosk03">
        <Link to="/camosk03">[CAMOSK]로드 패널</Link>
      </Menu.Item>
      <Menu.Item key="camosk04">
        <Link to="/camosk04">[CAMOSK]정류장 패널</Link>
      </Menu.Item>

    </Menu>
  );
}

export default LeftMenu;
