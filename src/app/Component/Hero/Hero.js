"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Hero = () => {
    const router = useRouter();
  const handleClick =()=>{
    router.push('/Contact');
  }
  return (
    <>
          <div style={{ display: "flex",flexWrap:"wrap",justifyContent:"space-between" }}>
        <div>
          <div >
            <p
              style={{
                color: "blue",
                fontSize: "30px",
                fontFamily: "roboto",
              }}
            >
              online Shopping
            </p>

            <p style={{ fontSize: "13px" }}>
              <i>
                Looking for the latest and greatest smartphones? You've come to
                the right place!
              </i>
            </p>
            <button
              style={{
                border: "1px solid ",
                marginTop: "10px",
                borderRadius: "8px",
                padding: "2px 9px",
                backgroundColor: "indianred",
                color:"white"
                
                
              }}
              onClick={handleClick}
            >
              click me
            </button>
          </div>
        </div>
        <div >
          <Image
            src="/Images/phoneImage.jpg"
            alt="Description of the image"
            width={400}
            height={200}
            objectFit="contain"
      
           
            
          />
        </div>
      </div>
    </>
  )
}

export default Hero