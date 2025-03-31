import { useState } from "react";
import styled from "styled-components";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";

import { Button, Dropdown } from "../Core/";
import { NavLinkProps, NavLinkType } from "../../utils/types";
import { navLinks } from "../../data/mock-data";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(23, 22, 1, 0.5);
  border-bottom: 2px solid #6a0dad;

  @media (max-width: 1024px) {
    padding: 10px 16px;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 16px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const NavLink = styled.a<NavLinkProps & { $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#b833ff" : "white")};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$isActive ? "rgba(184, 51, 255, 0.1)" : "transparent"};
  cursor: pointer;

  &:hover {
    color: #b833ff;
    background: rgba(184, 51, 255, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 12px 16px;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 12px;
  }
`;

const WalletButton = styled(Button)`
  background: linear-gradient(90deg, #b833ff 0%, #ff33cc 100%);
  border: none;
  color: white;
  font-weight: 600;
  margin-right: 4px;
  &:hover {
    background: linear-gradient(90deg, #ff33cc 0%, #b833ff 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const menu: MenuProps = {
  items: [
    { key: "1", label: "English" },
    { key: "2", label: "French" },
    { key: "3", label: "Spanish" },
  ],
};

const Header = () => {
  const [activeLink, setActiveLink] = useState<NavLinkType>("marketplace");

  const handleNavClick = (link: NavLinkType) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(link);
  };

  return (
    <HeaderContainer>
      <NavMenu>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            $isActive={activeLink === link.id}
            onClick={handleNavClick(link.id)}
          >
            {link.label}
          </NavLink>
        ))}
      </NavMenu>
      <ActionContainer>
        <WalletButton>Connect Wallet</WalletButton>
        <Dropdown menu={menu}>
          <LanguageSelector>
            <GlobalOutlined style={{ fontSize: "16px" }} />
            <DownOutlined style={{ marginLeft: "5px" }} />
          </LanguageSelector>
        </Dropdown>
      </ActionContainer>
    </HeaderContainer>
  );
};

export default Header;
