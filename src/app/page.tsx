"use client";

import Sidebar from "./modules/sidebar";
import About from "./modules/about";
import Project from "./modules/project";
import bloom from "../../public/bloom.png";
import blueprintt from "../../public/blueprintt.png";
import scaler from "../../public/scaler.png";
import cifracesar from "../../public/cifracesar.png";
import ybyra from "../../public/ybyra.png";
import Experience from "./modules/experience";
import Footer from "./modules/footer";
import { useInView, useOnInView } from "react-intersection-observer";

export default function Home() {
  const [refAbout, inViewAbout] = useInView({
    /* Optional options */
    threshold: 0.3, // Triggers when any part of the element is visible
    triggerOnce: false, // Only trigger the event once
  });

  const [refProjects, inViewProjects] = useInView({
    threshold: 0.55,
    triggerOnce: false,
  });
  const [refExperience, inViewExperience] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  return (
    <>
      <div id="background" className="lg:flex lg:px-48 py-16 dark:bg-darkBlue">
        <main id="content" >
          <div className="lg:fixed lg:w-1/4 lg:pt-24 px-8" id="sidebar">
            {/* <p className={`${inViewAbout ? "text-red-800" : "text-blue-800"}`}>
              teste About
            </p>
            <p
              className={`${inViewProjects ? "text-red-800" : "text-blue-800"}`}
            >
              teste Projects
            </p>
            <p
              className={`${
                inViewExperience ? "text-red-800" : "text-blue-800"
              }`}
            >
              teste Experience
            </p> */}

            <Sidebar
              inViewAbout={inViewAbout}
              inViewProjects={inViewProjects}
              inViewExperience={inViewExperience}
            />
          </div>

          {/* right side, content */}
          <div
            className="xl:ml-140 lg:ml-100 mb-6 w-fit"
            
          >
            <div id="about" ref={refAbout}>
              <About />
            </div>

            {/* Projects */}
            <div id="projects" className="mt-36 " ref={refProjects}>
              <p className="font-bold pb-8 lg:hidden sticky top-0 backdrop-blur-sm px-8 dark:text-offWhite">PROJETOS</p>
              <div className="px-8 lg:px-0">

              <Project
                link="https://www.bloombyimpact.com/"
                title="Bloom"
                content="Bloom é uma plataforma de monitoramento e avaliação de impacto social, ajudando empresas a atingirem métricas de Governança, Impacto Social e Ambiental."
                image={bloom}
                alt="Página inicial do site Bloom"
                tags={[
                  "React",
                  "Next",
                  "MUI",
                  "NodeJS",
                  "NestJS",
                  "PostgreSQL",
                ]}
              />
              <Project
                link="https://blueprintt.co/"
                title="Blueprintt"
                content="Backoffice de uma plataforma de organização de eventos corporativos."
                image={blueprintt}
                alt="Página inicial do site Blueprintt"
                tags={[
                  "Bubble.io",
                  "Pagar.me",
                  "Brevo",
                  "Stripe",
                  "PostgreSQL",
                ]}
              />

              <Project
                link="https://app.scalersale.com/"
                title="Scaler Sale"
                content="Plataforma de soluções para a área comercial. Oferece ferramentas como: prospecção via e-mail; busca de leads personalizados; e playbooks de vendas."
                image={scaler}
                alt="Página inicial do site Scaler Sale"
                tags={["Bubble.io", "Pagar.me", "Brevo", "PostgreSQL"]}
              />
              <Project
                link="https://cifra-de-cesar-funcional.vercel.app/"
                title="Cifra de Cesar"
                content="Técnica de criptografia clássica, onde cada letra de um texto é substituída por outra, que se encontra no alfabeto após a primeira letra em um número definido de vezes."
                image={cifracesar}
                alt="Página inicial do projeto Cifra de Cesar"
                tags={["React", "Typescript"]}
              />

              <Project
                link="https://conexao-ybyra.vercel.app/"
                title="Conexão Ybyra"
                content="Projeto de uma rede social que conecta usuários e atividades em parques e praças públicas."
                image={ybyra}
                alt="Página inicial do projeto Conexão Ybyra"
                tags={["React", "Typescript", "MySQL", "Java", "Spring"]}
              />
              </div>
            </div>

            {/* Experience */}
            <div id="experience" className="pt-24" ref={refExperience}>
              <p className="font-bold pb-8 lg:hidden sticky top-0 backdrop-blur-sm px-8 dark:text-offWhite">
                EXPERIÊNCIA
              </p>
              <div className="px-8 lg:px-0">
              <Experience
                year="DEZ 2023 — PRESENTE"
                position="Desenvolvedora Junior"
                company="DevMagic"
                link="https://devmagic.com.br/home/"
                description="Construo e mantenho o front-end de aplicações web e mobile para clientes nacionais e internacionais de diversos ramos, de soluções comerciais a organização de eventos corporativos, passando por comércio de granéis e monitorias de métricas de sustentabilidade. Trabalho em um time multifuncional, supervisionada por desenvolvedores seniores e em contato diário com as equipes de Design e Product Management."
                tags={[
                  "React",
                  "Next",
                  "Typescript",
                  "Tailwind",
                  "NodeJS",
                  "NestJS",
                  "SQL",
                  "Bubble.io",
                  "Flutterflow",
                ]}
              />
              </div>
            </div>

            {/* Footer */}
            <div>
              <Footer/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
