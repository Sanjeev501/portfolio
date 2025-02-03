import { FaLinkedinIn } from "react-icons/fa6";
import "./Footer.css";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerContent">
        <div className="skillsCardContent">
          <MdEmail color="white" size={20} />
          <h4>saisanjeev97@gmail.com</h4>
        </div>
        <div className="skillsCardContent">
          <MdLocalPhone color="white" size={20} />
          <h4>9494568165</h4>
        </div>
        <div className="skillsCardContent">
          <FaLocationDot color="white" size={20} />
          <h4>Hyderabad, India</h4>
        </div>
        <div>
          <h4>
            <span className="footerIcons">
              <a href="https://www.linkedin.com/in/sri-sai-sanjeev-ivatury-114832219/">
                <FaLinkedinIn color="white" />
              </a>
              <a href="https://github.com/Sanjeev501">
                <IoLogoGithub color="white" />
              </a>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
