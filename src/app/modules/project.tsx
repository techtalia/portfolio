"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface projectProps {
  image: StaticImageData;
  title: string;
  content: string;
  link: string;
  tags?: string[];
}

const Project = ({ image, title, content, link, tags }: projectProps) => {
  function openLink() {
    window.open(link)?.focus();
  }

  return (
    <div
    
      className="group flex rounded-md hover:bg-linear-to-r from-[#C5D3E0] to-[#e0ecff] hover:cursor-pointer gap-4 p-4"
      onClick={openLink}
    >
      <Image
        src={image}
        alt=""
        width={200}
        className="rounded-sm group-hover:border-green-400 group-hover:border-2"
      ></Image>

      {/* title and content */}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{content}</p>
        <div className="flex gap-1">
          {tags?.map((tag) => (
            <p
              key={tag}
              className="bg-[#051650] text-green-200 px-2 rounded-lg text-sm"
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
