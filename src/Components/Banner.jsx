import React, { useEffect, useState } from "react";
import hero from "../assets/Hero Section.png";


const Banner = () => {
  const words = ["Developer", "Designer", "Freelancer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Fade-in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen bg-transparent flex flex-col justify-center items-center text-center">

  <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={hero}
            alt="About me"
            className="rounded-xl shadow-lg w-50 h-50 bg-[#111717] p-3.5 object-cover"
          />
        </div>

      <h1 className="text-5xl text-[#00D4BD] font-bold mb-4">
        Mohammad Fakhruddin
      </h1>

      <div className="text-2xl md:text-3xl text-[#9C9C9C] font-medium mb-6">
        Creative{" "}
        <span
          key={index}
          className={`font-bold text-white transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {words[index]}
        </span>
      </div>

      <a
        href="/portfolio.pdf" 
        download
        className="bg-[#00D4BD] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 shadow-md hover:scale-105"
      >
        Download Portfolio
      </a>
    </section>
  );
};

export default Banner;
