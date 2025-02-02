import React from "react";
import adrielle from '../../../assets/images/adrielle.png';

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-16 flex items-center bg-white"
      style={{ minHeight: "calc(100vh)" }} // Ajustando para a altura correta
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Coluna do Texto */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
          <p className="text-gray-600 text-lg">
            Na Adrielle Oliveira Estética, dedicamo-nos a realçar a beleza natural de cada cliente. 
            Oferecemos tratamentos exclusivos e personalizados, combinando tecnologia de ponta e profissionais altamente qualificados.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Nosso compromisso é proporcionar experiências únicas, promovendo bem-estar e confiança. 
            Aqui, você encontra um ambiente acolhedor e resultados que fazem a diferença.
          </p>
        </div>

        {/* Coluna da Imagem */}
        <div className="w-44 sm:w-60 md:w-fit md:mx-auto">
          <img
            src={adrielle} // Substitua pelo caminho real da imagem
            alt="Sobre nós"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
