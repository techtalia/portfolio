"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface experienceProps {
  year: string;
  position: string;
  description: string;
  link: string;
  company: string;
  tags?: string[];
}

const Experience = ({
  year,
  position,
  description,
  link,
  tags,
  company,
}: experienceProps) => {
  const { t, i18n } = useTranslation();
  
  function openLink() {
    window.open(link)?.focus();
  }

  return (
    <div>
      <div
        className="group sm:flex rounded-md hover:bg-linear-to-r from-[#C5D3E0] to-[#e0ecff] hover:cursor-pointer w-full gap-2 space-y-4 dark:hover:bg-linear-to-r dark:from-[#0b5394] dark:to-[#073763]"
        onClick={openLink}
      >
        <p className="text-xs md:w-1/4 dark:text-offWhite">{year}</p>

        {/* title and content */}
        <div className="w-full md:w-3/4">
          <div className="flex gap-2">
            <p className="font-semibold dark:text-offWhite">{position}</p>•
            <p className="font-semibold dark:text-offWhite">{company}</p>
          </div>
          <p className="text-sm dark:text-offWhite">{description}</p>
          <div className="gap-1 flex flex-wrap mt-2">
            {tags?.map((tag) => (
              <p
                key={tag}
                className="bg-[#051650] text-green-200 px-2 rounded-lg text-sm dark:bg-hoverBlue dark:text-black"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

      </div>
      <Link href={i18n.language === 'en' ? '/resume' : '/curriculo'} target="_blank">
        <button className="hover:text-darkBlue font-bold hover:cursor-pointer mt-4 dark:text-lightBlue dark:hover:text-hoverBlue">
          {t('experience.viewResume')}
        </button>
      </Link>
    </div>
  );
};

export default Experience;
