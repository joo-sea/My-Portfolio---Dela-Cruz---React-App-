import React from "react";

export default function Skills() {
  const skills = ["JavaScript", "React", "CSS", "HTML", "Python", "Java", "Godot", "Computer System Servicing"];
  
  // Add an array for your certificates
  const certificates = [
    { src: "Dela Cruz - MS_Word-1.jpg", alt: "Certificate 1", title: "Certification in  Microsoft Word" },
    { src: "Dela Cruz - Resume_Cover_Letter-1.jpg", alt: "Certificate 2", title: "Certification in Creating a Resume and Cover Letter with Word" },
    { src: "Dela Cruz-Big_Query-1.jpg", alt: "Certificate 3", title: "Certification in Working with BigQuery" },
    { src: "Dela Cruz-Facebook-1.jpg", alt: "Certificate 4", title: "Certification in Organic Marketing: Facebook Groups For Small Businesses" },
    { src: "Dela Cruz-GSuite_Apps-1.jpg", alt: "Certificate 5", title: "Certification in Collaborating with G Suite Apps" },
    { src: "Dela Cruz-MS_PowerPoint-1.jpg", alt: "Certificate 6", title: "Certification in Microsoft PowerPoint" },

  ];

  return (
    <div>
      {/* Skills Section */}
      <section id="skills" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
              Skills &amp; Technologies
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => (
              <div key={skill} className="p-4 md:w-1/3">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-md hover:bg-opacity-60 transition-all">
                  <p className="leading-relaxed text-lg text-center text-white">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
              My Certificates
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {certificates.map((certificate, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-md hover:bg-opacity-60 transition-all">
                  {/* Certificate Image */}
                  <img
                    src={certificate.src}  // Replace with your actual certificate image path
                    alt={certificate.alt}
                    className="w-full h-auto object-cover rounded mb-4"
                  />
                  {/* Certificate Title */}
                  <p className="text-center text-white font-medium">{certificate.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}