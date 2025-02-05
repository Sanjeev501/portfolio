import { IoIosSchool } from "react-icons/io";

const Education = () => {
  return (
    <div className="CardsSection">
      <h2>Education</h2>
      <div className="CardsContainer">
        <div className="Card">
          <IoIosSchool size={18} color="orange" />
          <h3>Bachelors Degree - B.Tech</h3>
          <h3>SRKR Engineering College</h3>
          <h4> 2014 - 2018</h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
