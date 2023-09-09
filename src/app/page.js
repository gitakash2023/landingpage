"use client"
import About from "./OurTeam/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

import Hero from "./Component/Hero/Hero"


export default function Home() {
  
  return (
    <>
    <Hero/>
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}
