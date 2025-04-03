import Social from "@/components/Social";
import Divider from "@/components/Divider/index";
import { Button } from "antd";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Trung Thông</h1>
      <p className="subtitle">Software Engineer / Photographer</p>
      <p className="description">
        Xin chào, tớ là Trung Thông (Tandy.Le), sinh viên chuyên ngành Kỹ thuật
        phần mềm tại FPT. Tớ đang là freelancer photographer và là một
        guitarist. Tớ đang hướng tới trở thành một Fullstack Developer và thực
        hiện thêm nhiều ước mơ phía trước.
      </p>
      <div>
        <Button className="bg-btn" style={{ padding: "0px 5px" }}>
          ⌘
        </Button>
        <Button
          className="bg-btn"
          style={{ marginLeft: "10px", padding: "0px 7px" }}
        >
          t
        </Button>
        <span style={{ marginLeft: "5px" }}>để khám phá...</span>
      </div>
      <Divider type="horizontal" width="30%" height="1px" margin="10px 0px" />
      <Social />
      {/* <div className="social-buttons">
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
      </div> */}
      <p className="note">
        Dùng máy tính để có trải nghiệm tốt nhất. Horizontal
      </p>
      <p style={{ marginTop: "20px" }}>
        <strong className="text-gray">Trung Thông</strong>
      </p>
      <p>© 2025 Trung Thông. All rights reserved!</p>
    </div>
  );
};

export default Home;
