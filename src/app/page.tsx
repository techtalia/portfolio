"use client";

import Sidebar from "./modules/sidebar";
import About from "./modules/about";
import Project from "./modules/project";
import img from "../../public/download.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </Head>
    <div id="background" className="flex px-48">
      
      <main id="content" className=" border w-full h-full">
        {/* left side, menu and links */}
        <div className="fixed border w-1/4 pt-24">
          <Sidebar></Sidebar>
        </div>

        {/* right side, content */}
        <div className="ml-140 overflow-y-auto mb-14">
          {/* About */}
          <div id="about">
            <About />
          </div>
          <About></About>
          <About></About>
          <About></About>

          {/* Projects */}
          <div id="projects" className="pt-24">
            <Project
              link="https://www.google.com"
              title="Titulo"
              content="conteudo"
              image={img}
            />
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
