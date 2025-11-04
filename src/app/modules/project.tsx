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
    <div className="flex" onClick={openLink}>
      <Image src={image} alt="" width={120} height={50}></Image>
      {/* title and content */}
      <div >
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Project;
