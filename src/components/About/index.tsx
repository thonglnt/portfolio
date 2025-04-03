import Divider from "@/components/Divider";
import "./style.css";
import Avatar from "@/assets/avatar.jpg";
import Social from "@/components/Social";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">Giới thiệu</h1>
      <p className="subtitle">
        Một chút điều thú vị về tớ và những điều lớn lao.
      </p>
      <Divider height="1px" width="80%" borderTop="1px dotted #ccc" />
      <div style={{ display: "grid", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Avatar} alt="avatar" className="about-avatar" />
        </div>
        <h2 className="title about-name">Trung Thông</h2>
        <p className="subtitle" style={{ textAlign: "center" }}>
          Software Engineer / Photographer
        </p>
        <Social />
      </div>
      <p className="about-intro">
        Xin chào, tớ là Trung Thông (Tandy.Le), sinh viên chuyên ngành Kỹ thuật
        phần mềm tại FPT. Tớ đang là freelancer photographer và là một
        guitarist. Tớ đang hướng tới trở thành một Fullstack Developer và thực
        hiện thêm nhiều ước mơ phía trước.
      </p>
      <blockquote className="about-quote">
        "Tương lai thuộc về những người tin vào vẻ đẹp trong chính những giấc
        mơ, hoài bão to lớn của mình..."
      </blockquote>
      <p className="about-intro">
        Giới thiệu nhiều hơn một chút về bản thân, tớ sống và làm việc tại Da
        Nang. Tớ thích tìm hiểu về những thứ mới mẻ, thử thách bản thân và không
        ngừng học hỏi nhiều điều hơn. Tớ có kĩ năng khá tốt với nghệ thuật và cả
        kĩ thuật/công nghệ, không phải là năng khiếu thiên bẩm, nhưng tớ cảm
        nhận được tớ đã tự đạt được bằng những nỗ lực của bản thân. Tớ đã chơi
        đàn được hơn 5 năm rồi. Ngoài ra, tớ cũng siêu thích chụp ảnh, kiểu như,
        tớ đang muốn truyền tải với thế giới này những gì tớ thấy qua góc kính
        máy ảnh nhiệm màu. Tuy rằng hơi bận rộn với việc học và làm, nhưng tớ
        vẫn luôn có một khoảng dành cho những sở thích của riêng mình, tập đàn 2
        tiếng mỗi ngày, hay là ngồi code cả tối. Hihi, chắc là hết rồi, tạm gác
        ở đây nha!
      </p>
      <p style={{ fontStyle: "italic", marginTop: '15px' }}>Vai dong thu tay viet voi</p>
    </div>
  );
};

export default About;
