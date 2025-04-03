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

const Menu = ({ setCurrentPage }: MenuProps) => {
  const { toggleTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const menuItems = [
    {
      icon: <HomeOutlined onClick={() => setCurrentPage("home")} />,
      label: "Home",
    },
    { icon: <Divider height="30px" width="1px" />, label: "" },
    {
      icon: <UserOutlined onClick={() => setCurrentPage("about")} />,
      label: "About",
    },
    { icon: <FolderOutlined onClick={() => setCurrentPage("project")} />, label: "Projects" },
    { icon: <RiBrushFill />, label: "Design" },
    { icon: <GithubOutlined onClick={() => setCurrentPage("github")} />, label: "GitHub" },
    { icon: <InstagramOutlined onClick={() => setCurrentPage("ins")} />, label: "Instagram" },
    { icon: <RiBehanceFill />, label: "Behance" },
    { icon: <RiArticleFill />, label: "Blog" },
    { icon: <Divider height="30px" width="1px" />, label: "" },
    { icon: <SettingOutlined onClick={toggleTheme} />, label: "Settings" },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => {
        if (!item.label) {
          return item.icon;
        } else {
          return (
            <>
              <Tooltip
                title={item.label}
                key={index}
                placement="top"
                color="#fff"
                overlayInnerStyle={{ color: "#000" }}
              >
                <div
                  className={`menu-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.icon}
                  {activeIndex === index && <div className="dot" />}
                </div>
              </Tooltip>
            </>
          );
        }
      })}
    </div>
  );
};

export default Menu;
