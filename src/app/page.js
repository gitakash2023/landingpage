"use client"
import About from "./About/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleClick =()=>{
    router.push('/Contact');
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <div style={{ margin: "80px" }}>
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
        <div>
          <Image
            src="/Images/phoneImage.jpg"
            alt="Description of the image"
            width={400}
            height={200}
            style={{ margin: "50px" }}
          />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
