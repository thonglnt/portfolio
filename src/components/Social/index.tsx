import Divider from "@/components/Divider";
import { Button } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { RiBehanceFill } from "react-icons/ri";
import "./style.css";

const Social = () => {
  const handleClickIcon = (url: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="social-buttons">
      <Button className="bg-btn">Resume</Button>
      <Divider type="vertical" height="25px" width="1px" margin="0px 20px" />
      <FacebookOutlined
        onClick={() =>
          handleClickIcon("https://www.facebook.com/letrung.thong.96")
        }
        className="icon"
        style={{ marginLeft: "0px" }}
      />
      <InstagramOutlined
        onClick={() =>
          handleClickIcon("https://www.instagram.com/letrung.thong")
        }
        className="icon"
      />
      <GithubOutlined
        onClick={() => handleClickIcon("https://github.com/thonglnt")}
        className="icon"
      />
      <RiBehanceFill onClick={() => handleClickIcon("")} className="icon" />
    </div>
  );
};

export default Social;
