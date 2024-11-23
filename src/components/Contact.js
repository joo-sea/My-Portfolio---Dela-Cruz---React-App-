import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Contact Me
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-xl text-white font-medium">Email</h2>
              <p className="leading-relaxed">
                <a href="mailto:your-email@example.com" className="text-green-500">
                joseraphaelrdelacruz0928@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-xl text-white font-medium">Phone</h2>
              <p className="leading-relaxed">
                <a href="tel:+1234567890" className="text-green-500">
                (+63) 9694948734
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-xl text-white font-medium">Social Media</h2>
              <p className="leading-relaxed">
                <a
                  href="https://www.facebook.com/raprapd"
                  className="text-green-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </p>
              <p className="leading-relaxed">
                <a
                  href="https://github.com/joo-sea"
                  className="text-green-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}