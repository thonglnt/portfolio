import { useState, useRef } from "react";
import Divider from "@/components/Divider";
import { useTheme } from "@/App";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./style.css";

const Contact = () => {
  const { theme } = useTheme();
  const captchaRef = useRef<any>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSendEmail = async () => {
    const { name, email, subject, message } = formData;
    const templateParams = {
      name,
      email,
      subject,
      content: message,
    };

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (res.status === 200) {
        console.log("✅ Email sent:", res);
        toast.success("🎉 Gửi thành công!");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setCaptchaToken(null);
      captchaRef.current.resetCaptcha();
    } catch (error) {
      console.error("❌ Email send failed:", error);
      toast.error("Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau.");
    }
  };

  const handleSubmit = async () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      toast.error("Vui lòng điền đầy đủ tất cả các trường thông tin.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Email không hợp lệ. Vui lòng kiểm tra lại.");
      return;
    }
    if (!captchaToken) {
      toast.error("Vui lòng xác thực captcha trước khi gửi.");
      return;
    }
    console.log("📩 Form ready to send:", {
      ...formData,
      verifiedCaptcha: captchaToken,
    });

    await handleSendEmail();
  };

  return (
    <div className="container" style={{ width: "100vh" }}>
      <h1 className="title">Liên hệ</h1>
      <p className="subtitle">Mọi người liên hệ với tớ qua form này nhé.</p>
      <Divider
        height="1px"
        width="100%"
        borderTop={
          theme === "dark" ? "3px dotted #343434" : "3px dotted #e2e2e2"
        }
        margin="20px 0"
      />
      <p className="contact-title">Họ và tên</p>
      <Input
        placeholder="Họ và tên của bạn"
        value={formData.name}
        onChange={handleChange("name")}
      />
      <p className="contact-title">Email</p>
      <Input
        placeholder="Example@email.com"
        value={formData.email}
        onChange={handleChange("email")}
        type="email"
      />
      <p className="contact-title">Tiêu đề</p>
      <Input
        placeholder="Tiêu đề"
        value={formData.subject}
        onChange={handleChange("subject")}
      />
      <p className="contact-title">Nội dung</p>
      <Textarea
        placeholder="Viết lời nhắn tại đây..."
        value={formData.message}
        onChange={handleChange("message")}
      />
      <p className="note">Lưu ý: điền captcha trước khi submit nhé!</p>
      <HCaptcha
        sitekey="e4fe1c24-f144-43ac-88ea-db845a0834e0"
        onVerify={handleVerify}
        ref={captchaRef}
      />
      <button onClick={handleSubmit} className="send-email-btn">
        Gửi cho tớ
      </button>
    </div>
  );
};

export default Contact;
