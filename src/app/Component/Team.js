import React from "react";
import Image from "next/image";

const Team = ({ imgurl, title, designation }) => {
  return (
    <>
      <div>
        <div>
          <Image
            src={imgurl}
            alt="Description of the image"
            width={400}
            height={200}
            style={{ borderRadius:"50px" ,width:"70px",height:"70px",marginLeft:"25px"}}
            
          />
          <p style={{color:"gray",fontSize:"10px" ,marginLeft:"25px",marginTop:"5px"}}>{title}</p>
          <p style={{color:"gray",fontSize:"10px" ,marginLeft:"25px",marginTop:"2px"}}>{designation}</p>
        </div>
      </div>
    </>
  );
};

export default Team;
