"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Sidebar = () => {
  return (
    <div className="border ">
      {/* Title */}
      <div className="space-y-2 mb-20">
        <h1 className="text-5xl font-bold ">Talia Andrade</h1>
        <h2 className="text-2xl font-semibold">Desenvolvedora Front-End</h2>
        <p className="w-2/3">
          texto substituível com x caracteres para dar em 2 linhas
        </p>
      </div>

      {/* menu */}
      <div className="flex flex-col justify-start w-fit mb-60 space-y-2">
        
      <a href="#about">SOBRE</a>
      <a href="#projects">PROJETOS</a>
      <a href="#experience">EXPERIÊNCIA</a>
      <a href="#education">FORMAÇÃO</a>
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
