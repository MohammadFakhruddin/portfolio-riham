import React, { useState } from "react";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";
import Banner from "./Banner";
import Particles from "./Particles";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Banner />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Particles background */}
<div className="absolute inset-0 -z-10 h-full">
  <Particles
    className="w-full h-full"
    particleColors={["#ffffff", "#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>


      {/* Navbar always on top */}
      <Navbar onNavClick={setActiveSection} />

      {/* Content area (under navbar) */}
      <div className="pt-16 h-[calc(100%-4rem)] relative z-10">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainLayout;
