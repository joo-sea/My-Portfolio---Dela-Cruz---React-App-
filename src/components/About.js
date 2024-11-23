import React from "react";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* Profile Picture */}
        <div className="lg:w-1/3 w-1/2 mb-10 md:mb-0">
          <img
            src="jose.jpg" 
            alt="Jose Raphael R. Dela Cruz"
            className="rounded-full w-48 h-48 object-cover mx-auto" 
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jose Raphael R. Dela Cruz <br className="hidden lg:inline-block" />
            <br />
            Objective:
          </h1>
          <p className="mb-8 leading-relaxed">
            To build a career in a safe and growing organization,
            where I can express my skills and get the opportunities to
            prove my abilities by accepting challenges, fulfilling the
            organizational goals, and climb the career ladder through
            continuous learning and commitment.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}