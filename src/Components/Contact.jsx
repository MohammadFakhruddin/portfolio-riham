import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black flex flex-col items-center justify-center p-6"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2 text-[#00D4BD]">Get in Touch</h2>
        <div className="w-24 h-1 bg-[#9C9C9C] mx-auto rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full items-start">
        {/* Contact Info */}
        <div className="flex-1 rounded-xl shadow-lg p-6 space-y-6 bg-[#111]">
          <div className="flex items-center gap-3 text-[#00D4BD]">
            <MdLocationOn className="text-2xl" />
            <span>Bangladesh, Chittagong</span>
          </div>
          <div className="flex items-center gap-3 text-[#00D4BD]">
            <MdPhone className="text-2xl" />
            <span>+8801625280985</span>
          </div>
          <div className="flex items-center gap-3 text-[#00D4BD]">
            <MdEmail className="text-2xl" />
            <span>mdrihamctg@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 rounded-xl shadow-lg p-6 bg-[#00D4BD] mb-16 lg:mb-0">
          <form className="flex flex-col gap-4">
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00D4BD]"
            />

            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00D4BD]"
            />

              <label className="text-gray-700 font-medium">Message</label>
            <input
              type="text"
              placeholder="Massage"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00D4BD]"
            />

            <button
              type="submit"
              className="bg-black text-white font-semibold rounded-full px-6 py-3 mt-4 hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
