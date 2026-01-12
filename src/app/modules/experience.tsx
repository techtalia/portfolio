"use client";

import React from "react";
import Link from "next/link";

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
  function openLink() {
    window.open(link)?.focus();
  }

  return (
    <div>
      <div
        className="group sm:flex rounded-md hover:bg-linear-to-r from-[#C5D3E0] to-[#e0ecff] hover:cursor-pointer w-full gap-2 space-y-4 "
        onClick={openLink}
      >
        <p className="text-xs w-1/4">{year}</p>

        {/* title and content */}
        <div className="w-3/4">
          <div className="flex gap-2">
            <p className="font-semibold">{position}</p>•
            <p className="font-semibold">{company}</p>
          </div>
          <p className="text-sm ">{description}</p>
          <div className="gap-1 flex flex-wrap mt-2">
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
      <Link href={"/curriculo"} target="_blank">
        <button className="hover:text-[#051650] font-bold hover:cursor-pointer mt-4">
          Ver currículo completo
        </button>
      </Link>
    </div>
  );
};

export default Experience;
