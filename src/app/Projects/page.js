import React from "react";
import Productcard from "../Component/Productcard";

const Projects = () => {
  return (
    <>
      <div>
        <h4
          style={{
            color: "blue",
            textAlign: "center",
            fontSize: "14px",
            marginTop: "15px",
          }}
        >
          Our Products
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <div>
          <Productcard
            url={"/Images/mob1.jpg"}
            title={"Samsung Galaxy S21"}
            price={"12500.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob2.jpg"}
            title={"iPhone 11 Pro Max"}
            price={"13000.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob3.jpg"}
            title={"OnePlus Nord 2"}
            price={"10050.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob4.jpg"}
            title={"Xiaomi Mi 10T Pro"}
            price={"9850.00"}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <div>
          <Productcard
            url={"/Images/mob5.jpg"}
            title={"Google Pixel 3a"}
            price={"11500.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob1.jpg"}
            title={"Realme C11"}
            price={"11450.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob7.jpg"}
            title={"Sony Xperia L4"}
            price={"23950.00"}
          />
        </div>
        <div>
          <Productcard
            url={"/Images/mob2.jpg"}
            title={"OnePlus 7T"}
            price={"8550.00"}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
