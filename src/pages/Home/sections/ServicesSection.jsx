import CustomCarousel from "../../../components/UI-Components/CustomCarousel"; // Ajuste o caminho conforme necessário
import { services } from "@/assets/data/servicesData";

const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="py-16 flex items-center bg-gray-50"
      style={{ minHeight: "calc(100vh)" }} // Ajustando para a altura correta
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nossos Serviços
        </h2>

        {/* Usamos o CustomCarousel para exibir os cards de serviço */}
        <CustomCarousel items={services} />
      </div>
    </section>
  );
};

export default ServicesSection;
