"use client";
import React, { useState } from "react";
import Image from "next/image";


const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("“Welcome ");
      } else {
        alert("Form submission failed. Please check your data.");
      }
    } catch (error) {
      console.error(error);
    }
    setFormData("");
  };

  return (
    <>
   <div>
    <h5 style={{textAlign:"center",color:"blue",marginTop:"25px"}}>Contact us</h5>
    <p style={{textAlign:"center",color:"gray",marginTop:"15px"}}>We can help .Our team of experts is on hand to answer your questions</p>
   </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",alignItem:"center"}}>
      <div>
     {/* <h3 style={{color:"gray"}}>Contact Info</h3> */}
     <Image
          src={"/Images/contactimg.jpg"}
          alt="Description of the image"
          width={400}
          height={200}
          style={{
            borderRadius: "10px",
            width: "150px",
            height: "200px",
            
          }}
        />
      </div>
     
      <div>
      <form onSubmit={handleSubmit} autocomplete="off">
      <div style={{marginTop:"10px"}}>
         
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
            style={{color:"gray",fontSize:"10px",padding:"5px",outline:"none"}}
            value={formData.username}
            onChange={handleChange}
            required
          />
          </div>
          <div style={{marginTop:"10px"}}>
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={{color:"gray",fontSize:"10px",padding:"5px",outline:"none"}}
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
          <div style={{marginTop:"10px"}}>
          
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            style={{color:"gray",fontSize:"10px",padding:"5px",outline:"none"}}
            value={formData.address}
            onChange={handleChange}
            required
          />
          </div>
          <div style={{marginTop:"10px"}}>
          
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            style={{color:"gray",fontSize:"10px",padding:"5px",outline:"none"}}
            required
          />
          </div>
        <div style={{marginTop:"10px"}}>
         
          <input
            type="text"
            id="education"
            name="education"
             placeholder="Enter your education"
             style={{color:"gray",fontSize:"10px",padding:"5px",outline:"none"}}
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{marginTop:"10px"}}>
          <button type="submit" style={{color:"white" ,fontSize:"10px",
           backgroundColor:"indianred",padding:"2px 4px",borderRadius:"5px"
           
           }}>Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
