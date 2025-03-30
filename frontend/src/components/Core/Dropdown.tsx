import React from "react";
import { Dropdown as AntDropdown } from "antd";
import type { MenuProps } from "antd";

interface DropdownProps {
  children: React.ReactNode;
  menu: MenuProps;
}

const Dropdown: React.FC<DropdownProps> = ({ children, menu }) => {
  return (
    <AntDropdown trigger={["click"]} menu={menu}>
      {children}
    </AntDropdown>
  );
};

export default Dropdown;
