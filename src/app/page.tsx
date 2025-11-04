'use client'

import Sidebar from "./modules/sidebar";
import About from "./modules/about";
import Project from "./modules/project";
import img from '../../public/download.jpg'

export default function Home() {
  return (
    <div id="background" className="flex px-64 pt-8">
      <main id="content" className=" border w-full h-full">
        {/* left side, menu and links */}
        <div className="fixed border w-100">

        <Sidebar></Sidebar>
        </div>

        {/* right side, content */}
        <div className="ml-120 overflow-y-auto">

        <About></About>

        <Project link='https://www.google.com' title="titulo" content="conteudo" image={img}></Project>


        
        </div>
      </main>
    </div>
  );
}
