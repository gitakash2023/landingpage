import React from "react";
import Team from "../Component/Team";


const About = () => {
  return (
    <>
      <div>
        <h4 style={{ textAlign: "center", color: "blue" }}>Our Team</h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <Team
          imgurl={"/Images/mahee.jpg"}
          title={"Mahendra Singh"}
          designation={"Founder"}
        />
        <Team
          imgurl={"/Images/nawajbhai.jpg"}
          title={"Nawajuddin Siddiki"}
          designation={"Co-Founder"}
        />
        <Team
          imgurl={"/Images/johnbhai.jpg"}
          title={"John Abraham"}
          designation={" Manager"}
        />
        <Team
          imgurl={"/Images/sushantbhai.jpg"}
          title={"Sushant Rajput "}
          designation={"Actor"}
        />
      </div>
      {/* <Projects /> */}
    </>
  );
};

export default About;
