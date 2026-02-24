import React from "react";

const Footer = () => {
  return (
    <div className="pt-24 w-4/5 px-8 lg:px-0">
      <p className="dark:text-offWhite">
        Código feito no{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          Visual Studio Code
        </a>
        . Construído com{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          Next.js
        </a>{" "} 
         e{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          Tailwind CSS
        </a>
        . Utilizando{" "}
        <a
          href="https://mui.com/material-ui/material-icons/"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          Material Icons
        </a>{" "}
        e{" "}
        <a
          href="https://github.com/thebuilder/react-intersection-observer#readme"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          React Intersection Observer API
        </a>
        . Deploy feito com{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className="text-[#051650] font-bold hover:text-[#009999] dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
