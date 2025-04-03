import React, { useState } from "react";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FolderOutlined,
  SettingOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { RiBehanceFill, RiBrushFill, RiArticleFill } from "react-icons/ri";
import "./style.css";
import Divider from "../Divider";
import { useTheme } from "@/App";

interface MenuProps {
  setCurrentPage: (pageName: string) => void;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  page?: string;
}

const Menu = ({ setCurrentPage }: MenuProps) => {
  const { toggleTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const menuItems: MenuItem[] = [
    { icon: <HomeOutlined />, label: "Home", page: "home" },
    {
      icon: <Divider height="30px" width="1px" bgColor="#e2e2e2" />,
      label: "",
    },
    { icon: <UserOutlined />, label: "About", page: "about" },
    { icon: <FolderOutlined />, label: "Projects", page: "projects" },
    { icon: <RiBrushFill />, label: "Design" },
    { icon: <GithubOutlined />, label: "GitHub", page: "github" },
    { icon: <InstagramOutlined />, label: "Instagram", page: "ins" },
    { icon: <RiBehanceFill />, label: "Behance" },
    { icon: <RiArticleFill />, label: "Blog" },
    {
      icon: <Divider height="30px" width="1px" bgColor="#e2e2e2" />,
      label: "",
    },
    {
      icon: <SettingOutlined />,
      label: "Settings",
      page: "settings",
    },
  ];

  const handleClick = (index: number, page?: string) => {
    setActiveIndex(index);
    if (!page) return;

    if (page === "settings") toggleTheme();
    else setCurrentPage(page);
  };

  return (
    <div className="menu-container">
      {menuItems.map((item, index) =>
        !item.label ? (
          <React.Fragment key={index}>{item.icon}</React.Fragment>
        ) : (
          <Tooltip
            title={item.label}
            key={index}
            placement="top"
            color="#fff"
            overlayInnerStyle={{ color: "#000" }}
          >
            <div
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index, item.page)}
            >
              {item.icon}
              {activeIndex === index && <div className="dot" />}
            </div>
          </Tooltip>
        )
      )}
    </div>
  );
};

export default Menu;
