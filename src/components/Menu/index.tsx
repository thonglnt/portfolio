import React, { useState } from "react";
import { IModalConfirm } from "@/interfaces/modal";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FolderOutlined,
  SettingOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useTheme } from "@/App";
import Divider from "@/components/Divider";
import ModalConfirm from "@/components/Modal";
import "./style.css";

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
  const [modalConfirm, setModalConfirm] = useState<IModalConfirm>({
    isShowModal: false,
    redirectUrl: "",
    message: "",
  });

  const menuItems: MenuItem[] = [
    { icon: <HomeOutlined />, label: "Home", page: "home" },
    {
      icon: <Divider height="30px" width="1px" bgColor="#e2e2e2" />,
      label: "",
    },
    { icon: <UserOutlined />, label: "About", page: "about" },
    { icon: <FolderOutlined />, label: "Projects", page: "projects" },
    { icon: <YoutubeOutlined />, label: "Youtube", page: "youtube" },
    {
      icon: <Divider height="30px" width="1px" bgColor="#e2e2e2" />,
      label: "",
    },
    // { icon: <RiBrushFill />, label: "Design" },
    { icon: <GithubOutlined />, label: "GitHub", page: "github" },
    { icon: <InstagramOutlined />, label: "Instagram", page: "ins" },
    // { icon: <RiArticleFill />, label: "Blog" },
    {
      icon: <Divider height="30px" width="1px" bgColor="#e2e2e2" />,
      label: "",
    },
    { icon: <LinkOutlined />, label: "Contact", page: "contact" },
    {
      icon: <SettingOutlined />,
      label: "Settings",
      page: "settings",
    },
  ];

  const handleClick = (index: number, page?: string) => {
    setActiveIndex(index);
    if (!page) return;

    switch (page) {
      case "settings":
        toggleTheme();
        break;
      case "github":
        setModalConfirm({
          isShowModal: true,
          redirectUrl: "https://github.com/thonglnt",
          message: "Bạn có muốn chuyển tới trang Github của tớ không?",
        });
        break;
      case "ins":
        setModalConfirm({
          isShowModal: true,
          redirectUrl: "https://www.instagram.com/letrung.thong",
          message: "Bạn có muốn chuyển tới trang Instagram của tớ không?",
        });
        break;
      default:
        setCurrentPage(page);
        break;
    }
  };

  const handleCancel = () => {
    setModalConfirm({
      isShowModal: false,
      redirectUrl: "",
      message: "",
    });
  };

  const handleConfirm = () => {
    window.open(modalConfirm.redirectUrl, "_blank");
    setModalConfirm({
      isShowModal: false,
      redirectUrl: "",
      message: "",
    });
  };

  return (
    <div className="menu-container">
      <ModalConfirm
        modalConfirmProps={modalConfirm}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <div className="menu-scroll">
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
    </div>
  );
};

export default Menu;
