"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



const Sidebar = ( ) => {
  return (
    <div >
      {/* Title */}
      <div className="space-y-2 lg:mb-20 mb-8">
        <h1 className="text-5xl font-bold ">Talia Andrade</h1>
        <h2 className="text-2xl font-semibold">Desenvolvedora Front-End</h2>
        <p className="w-3/4">
          Eu desenvolvo projetos acessíveis, centrados na experiência do usuário.
        </p>
      </div>

      {/* menu */}
      <div className="lg:flex lg:flex-col lg:justify-start lg:w-fit lg:mb-60 lg:space-y-2 hidden">
        
      <a href="#about" className="hover:text-[#051650] hover:font-bold">— SOBRE</a> 
      <a href="#projects" className="hover:text-[#051650] hover:font-bold">— PROJETOS</a>
      <a href="#experience" className="hover:text-[#051650] hover:font-bold">— EXPERIÊNCIA</a>
      {/* <a href="#education">FORMAÇÃO</a> */}
      </div>

      {/* footer */}
      <div className="space-x-4">
        <a href="https://github.com/techtalia" target="_blank">
          {/* reverter as cores no darktheme */}
          <GitHubIcon fontSize="large" sx={{color: "#01579b", '&:hover': {color: "#03a9f4"}}} />
        </a>
        <a href="https://www.linkedin.com/in/techtalia/" target="_blank">
          <LinkedInIcon  fontSize="large" sx={{color: "#01579b", '&:hover': {color: "#03a9f4"}}}/>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
