import { Button } from "../../../components/ui/button";
import postagens from '../../../assets/images/postagens.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${postagens})`, // Corrigido para o formato correto de URL
        height: "calc(100vh)", // ajusta conforme a altura do header
      }}
    >
      {/* Overlay para garantir legibilidade dos textos */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bem-vindo à Adrielle Oliveira Estética
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Realce sua beleza com tratamentos exclusivos e inovadores.
        </p>
        <Button className="text-lg px-8 py-6">Agendar Agora</Button>
      </div>
    </section>
  );
};

export default Hero;
