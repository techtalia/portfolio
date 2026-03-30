"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => {
    const body = document?.querySelector(".parentDiv");
    const cursorDiv = document?.querySelector(".cursorDiv");
    if (body?.classList.contains("dark")) {
      body.classList.remove("dark");
      cursorDiv?.classList.remove("cursor-glow")
    } else {
      body?.classList.add("dark");
      cursorDiv?.classList.add("cursor-glow")

    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      {/* Title */}
      <div className="space-y-2 lg:mb-20 mb-8">
        <h1 className="text-5xl font-bold dark:text-offWhite">Talia Andrade</h1>
        <h2 className="text-2xl font-semibold dark:text-offWhite">
          {t('sidebar.role')}
        </h2>
        <p className=" dark:text-offWhite">
          {t('sidebar.description')}
        </p>  
      </div>

      {/* menu */}
      <div className="lg:flex lg:flex-col lg:justify-start lg:w-fit lg:mb-40 lg:space-y-2 hidden">
        <a
          href="#about"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewAbout ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — {t('sidebar.menu.about')}
        </a>
        <a
          href="#projects"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewProjects ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — {t('sidebar.menu.projects')}
        </a>
        <a
          href="#experience"
          className={`hover:text-[#051650] dark:hover:text-offWhite hover:font-bold ${inViewExperience ? "text-[#051650] font-bold" : ""} dark:text-offWhite`}
        >
          — {t('sidebar.menu.experience')}
        </a>
        {/* <a href="#education">FORMAÇÃO</a> */}
      </div>

      {/* footer */}
      <div className="space-x-4">
        <button
          onClick={toggleLanguage}
          className="text-hoverBlue hover:text-lightBlue font-bold text-lg hover:cursor-pointer"
          title="Toggle Language"
        >
          {i18n.language === 'en' ? '🇧🇷' : '🇺🇸'}
        </button>
        
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
