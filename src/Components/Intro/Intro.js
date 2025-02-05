import "./Intro.css";
import photo from "../../assets/IMG_3324.webp";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Intro = () => {
  return (
    <div className="intro">
      <div className="imgContainer">
        <img className="img" src={photo}></img>
      </div>
      <div className="contentContainer">
        <h1>
          <i>Sanjeev Ivatury</i>
        </h1>
        <p>Frontend Developer</p>
        <p>saisanjeev97@gmail.com</p>
        <p>
          I specialize in building high-performance web applications that focus
          on seamless user experiences. Passionate about React, Redux and
          optimizing user interactions, I'm always excited to collaborate on
          innovative projects and bring ideas to life.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/sri-sai-sanjeev-ivatury-114832219/">
            <FaLinkedinIn color={"rgb(71, 71, 71)"} />
          </a>
          <a href="https://github.com/Sanjeev501">
            <IoLogoGithub color={"rgb(71, 71, 71)"} />
          </a>
          <a
            className="download-btn"
            href={`${process.env.PUBLIC_URL}/Sanjeev_Ivatury_Resume.pdf`}
            download="Sanjeev_Ivatury_Resume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
