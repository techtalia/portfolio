"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface projectProps {
  image: StaticImageData;
  title: string;
  content: string;
  link: string;
}

const Project = ({ image, title, content, link }: projectProps) => {
  function openLink() {
    window.open(link)?.focus();
  }

  return (
    <div className="flex rounded-md hover:bg-linear-to-r from-[#C5D3E0] to-[#e0ecff] hover:cursor-pointer gap-4 p-4" onClick={openLink}>
      <Image src={image} alt="" width={120} className="rounded-sm"></Image>
      {/* title and content */}
      <div className="space-y-1">
        <p className="font-semibold">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Project;
