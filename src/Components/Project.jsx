import React, { useState } from "react";
import project1Img from "../assets/ptoject1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-[#00D4BD] text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Project 1 */}
        <div className="bg-black rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#9C9C9C]">
          <div className="w-full h-48 overflow-hidden">
            <img
              src={project1Img}
              alt="Portfolio Website"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <h3 className="text-2xl font-semibold mb-3 text-[#9C9C9C]">
              Socio
            </h3>
            <p className="font-semibold mb-3 text-[#9C9C9C]">
              Social Volunteering Platform
            </p>
            <button
              onClick={() => setActiveProject("portfolio")}
              className="mt-auto bg-[#00D4BD] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 "
            >
              Details
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-black rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#9C9C9C]">
          <div className="w-full h-48 overflow-hidden">
            <img
              src={project2Img}
              alt="Recipe Book"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <h3 className="text-2xl font-semibold mb-3 text-[#9C9C9C]">
              Recipe Book
            </h3>
            <p className="font-semibold mb-3 text-[#9C9C9C]">
              Recipe Sharing Platform
            </p>
            <button
              onClick={() => setActiveProject("ecommerce")}
              className="mt-auto bg-[#00D4BD] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Details
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-black rounded-xl shadow-lg overflow-hidden flex flex-col border-2 border-[#9C9C9C]">
          <div className="w-full h-48 overflow-hidden">
            <img
              src={project3Img}
              alt="Blog Application"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1 justify-between">
            <h3 className="text-2xl font-semibold mb-3 text-[#9C9C9C]">
              Blog Application
            </h3>
            <p className="font-semibold mb-3 text-[#9C9C9C]">
              Paid Membership Platform
            </p>
            <button
              onClick={() => setActiveProject("blog")}
              className="mt-auto bg-[#00D4BD] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal / Details */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-xl p-8 max-w-2xl w-full relative border border-[#9C9C9C]">
            <button
              className="absolute top-4 right-4 text-[#9C9C9C] hover:text-[#00D4BD] text-lg"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            {activeProject === "portfolio" && (
              <div>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Tech Stack:</strong> React, TailwindCSS
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Description:</strong> Socio is a responsive, community-driven event management platform where users can create, join, and manage social service events (e.g. road cleanups, tree plantations, donation drives). The app includes secure authentication (email + Google), JWT-protected private routes, event creation with future-date validation, server-side search & filter.


                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Challenges:</strong> Creating smooth section
                  animations and responsive layout.
                </p>
                
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Future Improvements:</strong> Dark mode, more
                  animations.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Live:</strong>{" "}
                  <a href="https://socio-7ccb1.web.app/" target="_blank" className="text-[#00D4BD] hover:underline">
                    Visit
                  </a>
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">GitHub:</strong>{" "}
                  <a href="https://github.com/MohammadFakhruddin/socio-client" target="_blank"  className="text-[#00D4BD] hover:underline">
                    Client Repo
                  </a>
                </p>
              </div>
            )}

            {activeProject === "ecommerce" && (
              <div>

                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Tech Stack:</strong> React, Node.js, MongoDB
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Description:</strong> A user-friendly Recipe Book App where users can manage their recipes, discover recipes from others, add recipes to a wishlist, and like recipes. The app features a dynamic top recipes section based on likes, providing a simple and engaging platform for food enthusiasts.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Challenges:</strong> Managing user-generated
                  content and search functionality.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Future Improvements:</strong> Add categories,
                  better filtering.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Live:</strong>{" "}
                  <a href="https://recipe-book-fbbc3.web.app/" target="_blank"  className="text-[#00D4BD] hover:underline">
                    Visit
                  </a>
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">GitHub:</strong>{" "}
                  <a href="#" target="_blank" className="text-[#00D4BD] hover:underline">
                    Client Repo
                  </a>
                </p>
              </div>
            )}

            {activeProject === "blog" && (
              <div>

                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Tech Stack:</strong> React, Express, MongoDB
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Description:</strong> This project is a full-featured MERN stack forum platform where users can create posts, interact through comments, vote on content, and share posts socially. It offers role-based access for normal users, paid members, and admins, each with dedicated dashboards.


                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Challenges:</strong> Managing backend routes
                  and user authentication.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Future Improvements:</strong> Add rich-text
                  editor, tagging system.
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">Live:</strong>{" "}
                  <a href="https://chatter-box-9325d.web.app/" target="_blank" className="text-[#00D4BD] hover:underline">
                    Visit
                  </a>
                </p>
                <p className="mb-2 text-[#9C9C9C]">
                  <strong className="text-[#00D4BD]">GitHub:</strong>{" "}
                  <a href="https://github.com/MohammadFakhruddin/chatter-box-client" target="_blank" className="text-[#00D4BD] hover:underline">
                    Client Repo
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
