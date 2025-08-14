import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const About = () => {
  const social = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile" },
    { icon: <FaGithub />, link: "https://github.com/MohammadFakhruddin" },
    { icon: <FaFacebook />, link: "https://facebook.com/yourprofile" },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-black flex flex-col items-center justify-center px-6"
    >


        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#00D4BD] mb-6">About Me</h2>

          <p className="text-[#A2A2A2] leading-relaxed mb-4">
            Hello! I'm Riham, a freelance web developer. My programming journey started with HTML and CSS, 
            and over time I dove into JavaScript, React, and Next.js. I enjoy building websites and applications 
            that are both beautiful and functional, turning ideas into interactive digital experiences.
          </p>

          <p className="text-[#A2A2A2] leading-relaxed mb-2">
            The type of work I enjoy most involves creating responsive interfaces, 
            optimizing performance, and solving challenging problems with clean code. 
            I love when my work makes a positive impact on users’ experiences.
          </p>

          <p className="text-[#A2A2A2] leading-relaxed mb-2">
            I’d describe myself as curious, dedicated, and always eager to learn. 
            Collaboration and continuous improvement are key values I bring to every project.
          </p>

          <button  className="bg-[#00D4BD] text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-black transition duration-300 mb-6">
            See My Projects
          </button>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D4BD] text-2xl hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

    </section>
  );
};

export default About;
