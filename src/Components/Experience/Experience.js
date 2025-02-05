import { MdWorkHistory } from "react-icons/md";

const Experience = () => {
  return (
    <div className="CardsSection">
      <h2>Work Experience</h2>
      <div className="CardsContainer">
        <div className="Card">
          <MdWorkHistory size={18} color="orange" />
          <h3>Software Engineer</h3>
          <h3>Cognizant</h3>
          <h4> February 2022 - Present</h4>
        </div>
        <div className="Card">
          <MdWorkHistory size={18} color="orange" />
          <h3>Associate Consultant</h3>
          <h3>Capgemini</h3>
          <h4>March 2019 - February 2022</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
