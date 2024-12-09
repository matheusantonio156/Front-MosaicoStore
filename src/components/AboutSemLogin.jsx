// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/About.css";
import Logo from "../images/logoGrande.png";

const AboutSemLogin = () => {
  return (
    <section className="about">
      <div className="about_title">
        <h1>SOBRE NÓS</h1>
      </div>

      <div className="about_description">
        <div className="description_logo">
          <img src={Logo} alt="logo"></img>
        </div>

        <div className="description_text">
          <p id="space">
            Criada em 2023, a Loja MOSAICO é uma plataforma de e-commerce voltada para o comércio local, mais especificamente no perímetro do estado de Pernambuco.
            Nosso objetivo é oferecer um espaço onde produtores locais possam apresentar suas criações, democratizando o acesso à moda e à cultura regional.
          </p>

          <p>
            Buscamos oferecer às pessoas interessadas em fazer um consumo consciente uma conexão direta com aqueles que produzem o que elas estão vestindo. Quando você veste MOSAICO, está vestindo, além do tecido, uma ideia. Você também pode vender aqui. Faça seu cadastro e comece a mostrar a sua arte na MOSAICO.
             Queremos que você seja visto. Queremos mostrar moda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSemLogin;
