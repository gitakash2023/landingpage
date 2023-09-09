import React from "react";
import Image from "next/image";

const Productcard = ({ url, title, price }) => {
  return (
    <>
      <div style={{ border: "1px solid gray", borderRadius: "15px" }}>
        <Image
          src={url}
          alt="Description of the image"
          width={400}
          height={200}
          style={{
            borderRadius: "10px",
            width: "150px",
            height: "200px",
            margin: "20px",
          }}
        />
        <p style={{ textAlign: "center" ,color:"gray",fontSize:"14px"}}>{title}</p>
        <p style={{ textAlign: "center" ,color:"gray",fontSize:"10px"}}>{price}</p>
      </div>
    </>
  );
};

export default Productcard;
