"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface projectProps {
  image: StaticImageData;
  title: string;
  content: string;
  link: string;
  alt: string;
  tags?: string[];
}

const Project = ({ image, title, content, link, alt, tags }: projectProps) => {
  function openLink() {
    window.open(link)?.focus();
  }

  return (
    <div
    
      className="group sm:flex rounded-md hover:bg-linear-to-r from-[#C5D3E0] to-[#e0ecff] hover:cursor-pointer gap-4 pb-8 mb-8 w-full dark:hover:bg-linear-to-r dark:from-[#0b5394] dark:to-[#073763]"
      onClick={openLink}
    >
      
      <div className="w-2/4 lg:w-2/5 pb-2 sm:pb-0">

      <Image
        src={image}
        alt={alt}
        objectFit="contain"
        className="rounded-sm group-hover:border-green-400 group-hover:border-2 dark:group-hover:border-lightBlue "
        ></Image>
        </div>

      {/* title and content */}
      <div className="sm:w-3/4">
        <p className="font-semibold dark:text-offWhite">{title}</p>
        <p className="text-sm dark:text-offWhite">{content}</p>
        <div className="flex gap-1 mt-4 flex-wrap">
          {tags?.map((tag) => (
            <p
              key={tag}
              className="bg-darkBlue text-green-200 px-2 rounded-lg text-sm dark:bg-hoverBlue dark:text-black"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
