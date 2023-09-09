import React from "react";
import Team from "../Component/Team";
import Projects from "../Projects/page"
import Contact from "../Contact/page"


const OurTeam = () => {
  return (
    <>
      <div>
        <h4 style={{ textAlign: "center", color: "blue" }}>Our Team</h4>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          gap:"20px",
          justifyContent: "space-between",
         
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
      <Projects/>
      {/* <Contact/> */}
    </>
  );
};

export default OurTeam;
