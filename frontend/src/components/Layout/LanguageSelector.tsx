import React from "react";
import { Dropdown } from "../Core";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";

const LanguageSelector: React.FC = () => {
  return (
    <Dropdown
      menu={{
        items: [
          { key: "en", label: "English" },
          { key: "es", label: "Español" },
          { key: "fr", label: "Français" },
        ],
      }}
    >
      <div className="flex items-center cursor-pointer text-white">
        <GlobalOutlined className="text-lg" />
        <DownOutlined className="ml-1 text-xs" />
      </div>
    </Dropdown>
  );
};

export default LanguageSelector;
