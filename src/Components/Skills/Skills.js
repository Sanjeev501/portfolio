import "./Skills.css";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="SkillsContainer">
      <h2>Skills</h2>
      <div className="skillsCardContainer">
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>React</h3>
            <IoLogoReact color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>Redux</h3>
            <TbBrandRedux color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>JavaScript</h3>
            <IoLogoJavascript color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>TypeScript</h3>
            <SiTypescript color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>HTML</h3>
            <FaHtml5 color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>CSS</h3>
            <FaCss3Alt color="orange" size={20} />
          </div>
        </div>
        <div className="skillsCard">
          <div className="skillsCardContent">
            <h3>SASS</h3>
            <FaSass color="orange" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
