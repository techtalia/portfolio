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
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [refAbout, inViewAbout] = useInView({
    threshold: 0.3,
    triggerOnce: false, 
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
              <p className="font-bold pb-8 lg:hidden sticky top-0 backdrop-blur-sm px-8 dark:text-offWhite">{t('projects.title')}</p>
              <div className="px-8 lg:px-0">

              <Project
                link="https://www.bloombyimpact.com/"
                title={`${t('projects.bloom')}`}
                content={t('projects.bloomContent')}
                image={bloom}
                alt={t('projects.bloomAlt')}
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
                title={t('projects.blueprintt')}
                content={t('projects.blueprinttContent')}
                image={blueprintt}
                alt={t('projects.blueprinttAlt')}
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
                title={t('projects.scaler')}
                content={t('projects.scalerContent')}
                image={scaler}
                alt={t('projects.scalerAlt')}
                tags={["Bubble.io", "Pagar.me", "Brevo", "PostgreSQL"]}
              />
              <Project
                link="https://cifra-de-cesar-funcional.vercel.app/"
                title={t('projects.cifraDeCesar')}
                content={t('projects.cifraDeCesarContent')}
                image={cifracesar}
                alt={t('projects.cifraDeCesarAlt')}
                tags={["React", "Typescript"]}
              />

              <Project
                link="https://conexao-ybyra.vercel.app/"
                title={t('projects.ybyra')}
                content={t('projects.ybyraContent')}
                image={ybyra}
                alt={t('projects.ybyraAlt')}
                tags={["React", "Typescript", "MySQL", "Java", "Spring"]}
              />
              </div>
            </div>

            {/* Experience */}
            <div id="experience" className="pt-24" ref={refExperience}>
              <p className="font-bold pb-8 lg:hidden sticky top-0 backdrop-blur-sm px-8 dark:text-offWhite">
                {t('experience.title')}
              </p>
              <div className="px-8 lg:px-0">
              <Experience
                year={t('experience.year')}
                position={t('experience.position')}
                company={t('experience.company')}
                link="https://devmagic.com.br/home/"
                description={t('experience.description')}
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
