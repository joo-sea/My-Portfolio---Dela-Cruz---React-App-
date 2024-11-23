import React from "react";

export default function Navbar() {
    return (  
    <header className="bg-gray-800"> 
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
            <a href="#home" className="flex title-font font-medium items-center text-white mb-4 md:mb-0"> 
                <span className="ml-3 text-xl">My Portfolio</span> 
            </a> 
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"> 
                <a href="#about" className="mr-5 hover:text-white">About</a> 
                <a href="#projects" className="mr-5 hover:text-white">Projects</a> 
                <a href="#skills" className="mr-5 hover:text-white">Skills</a> 
               {/* <a href="#testimonials" className="mr-5 hover:text-white">Testimonials</a> */}
                <a href="#contact" className="mr-5 hover:text-white">Contact</a> 
            </nav> 
        </div>
    </header>
    );
}
