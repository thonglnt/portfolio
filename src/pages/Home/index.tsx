import Social from "@/components/Social";
import Divider from "@/components/Divider/index";
import { Button } from "antd";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Trung Thông</h1>
      <p className="subtitle">Software Engineer / Photographer</p>
      <Divider type="horizontal" width="30%" height="1px" margin="10px 0px" bgColor="#6f6f6f" />
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
      <Divider type="horizontal" width="30%" height="1px" margin="10px 0px" bgColor="#6f6f6f" />
      <Social />
      <Divider type="horizontal" width="10%" height="1px" margin="10px 0px" bgColor="#6f6f6f" />
      <p className="note">
        Dùng máy tính để có trải nghiệm tốt nhất.
      </p>
      <p style={{ marginTop: "20px" }}>
        <strong className="text-gray">Trung Thông</strong>
      </p>
      <p>© 2025 Trung Thông. All rights reserved!</p>
    </div>
  );
};

export default Home;
