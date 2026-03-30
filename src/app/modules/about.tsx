import React from "react";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-24 space-y-3 ">
      <p className="font-bold pb-8 lg:hidden sticky top-0 px-8 backdrop-blur-sm dark:text-offWhite">{t('about.title')}</p>
      <div className="px-8 lg:px-0 dark:text-offWhite">
      <p>
        {t('about.intro')}
      </p>
      <br />

      <p>
        {t('about.currentRole')}{" "}
        <a
          href="https://devmagic.com.br/home/"
          target="_blank"
          className="text-darkBlue font-bold hover:text-lightBlue dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          DevMagic
        </a>
        {t('about.intro2')}
      </p>
      <br />
      <p>
        {t('about.intro3')}
      </p>
      <br />
      <p>
        {t('about.intro4')}
      </p>
      </div>
    </div>
  );
};

export default About;
