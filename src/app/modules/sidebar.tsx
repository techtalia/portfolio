"use client";
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface sidebarProps {
  inViewAbout: boolean;
  inViewProjects: boolean;
  inViewExperience: boolean;
}

const Sidebar = ({
  inViewAbout,
  inViewExperience,
  inViewProjects,
}: sidebarProps) => {
  const toggleDarkMode = () => {
    const body = document?.querySelector(".parentDiv");
    if (body?.classList.contains("dark")) {
      body.classList.remove("dark");
    } else {
      body?.classList.add("dark");
    }
  };

  return (
    <div>
      {/* Title */}
      <div className="space-y-2 lg:mb-20 mb-8">
        <h1 className="text-5xl font-bold dark:text-offWhite">Talia Andrade</h1>
        <h2 className="text-2xl font-semibold dark:text-offWhite">
          Desenvolvedora Front-End
        </h2>
        <p className="w-3/4 dark:text-offWhite">
          Eu desenvolvo projetos acessíveis, centrados na experiência do
          usuário.
        </p>
      </div>

      {/* menu */}
      <div className="lg:flex lg:flex-col lg:justify-start lg:w-fit lg:mb-40 lg:space-y-2 hidden">
        <a
          href="#about"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewAbout ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — SOBRE
        </a>
        <a
          href="#projects"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewProjects ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — PROJETOS
        </a>
        <a
          href="#experience"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewExperience ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — EXPERIÊNCIA
        </a>
        {/* <a href="#education">FORMAÇÃO</a> */}
      </div>

      {/* footer */}
      <div className="space-x-4">
        <DarkModeIcon
          fontSize="large"
          className="hover:cursor-pointer text-hoverBlue hover:text-lightBlue "
          onClick={toggleDarkMode}
        />

        <a href="https://github.com/techtalia" target="_blank">
          {/* reverter as cores no darktheme */}
          <GitHubIcon
            fontSize="large"
            sx={{ color: "#03a9f4", "&:hover": { color: "#01579b" } }}
          />
        </a>
        <a href="https://www.linkedin.com/in/techtalia/" target="_blank">
          <LinkedInIcon
            fontSize="large"
            sx={{ color: "#03a9f4", "&:hover": { color: "#01579b" } }}
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
