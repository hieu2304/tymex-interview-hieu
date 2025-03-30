import React from "react";
import { Menu as AntMenu } from "antd";

interface MenuProps {
  items: { key: string; label: string }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return <AntMenu items={items} />;
};

export default Menu;
