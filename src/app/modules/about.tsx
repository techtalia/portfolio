import React from "react";


const About = () => {
  return (
    <div className="pt-24 space-y-3 ">
      <p className="font-bold pb-8 lg:hidden sticky top-0 px-8 backdrop-blur-sm dark:text-offWhite">SOBRE</p>
      <div className="px-8 lg:px-0 dark:text-offWhite">
      <p>
        Sou uma desenvolvedora front-end com foco em construir projetos focados
        na experiência do usuário. Utilizo os recursos das
        linguagens/bibliotecas nas quais desenvolvo para evitar códigos
        excessivamente e desnecessariamente robustos e ilegíveis, combinando
        acessibilidade e usabilidade com performance e eficiência.
      </p>
      <br />

      <p>
        Atualmente sou Desenvolvedora Jr. na{" "}
        <a
          href="https://devmagic.com.br/home/"
          target="_blank"
          className="text-darkBlue font-bold hover:text-lightBlue dark:text-lightBlue dark:hover:text-hoverBlue"
        >
          DevMagic
        </a>
        , uma Software House com clientes nacionais e internacionais. Atuo em
        diversos projetos, como: uma plataforma de organização de eventos; um
        site de monitoramento e avaliação de impacto social para empresas; uma
        plataforma de soluções para a área comercial; entre outros. Desenvolvo
        diariamente com tecnologias como Typescript (utilizando React/NextJS e
        NodeJS) e NoCode/Low-Code com Bubble e FlutterFlow, sempre com a
        supervisão de desenvolvedores sêniors, assim aprimorando conhecimentos
        técnicos e soft skills.
      </p>
      <br />
      <p>
        Possuo certificações abrangentes em Typescript e React - áreas de
        enfoque primário - bem como em Node.Js, Python, Java e Cloud Computing
        (AWS Certified Cloud Practitioner). Além disso, meu percurso anterior
        como Professora de História me forneceu uma base sólida em habilidades
        interpessoais e colaborativas, fomentadas ao longo de anos de
        experiência em sala de aula.
      </p>
      <br />
      <p>
        No meu tempo livre, gosto de passear com minha cachorra, caminhar sem
        rumo na praia, e de experimentar todo tipo de jogos de RPG ou Roguelike
        que eu encontrar.
      </p>
      </div>
    </div>
  );
};

export default About;
