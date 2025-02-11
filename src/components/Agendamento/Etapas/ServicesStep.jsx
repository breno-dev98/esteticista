import CustomCard from "@/components/UI-Components/CustomCard";
import CustomCarousel from "@/components/UI-Components/CustomCarousel";
import axios from "axios";
import { useEffect, useState } from "react";

const ServicesStep = ({ selectedCategory, onSelect }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/servicos");
      setServices(res.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, [selectedCategory]);

  // Filtra os serviços com base na categoria selecionada
  const filteredServices = services.filter((service) => {
    if (!selectedCategory || selectedCategory === "Todos") {
      return true; // Exibe todos os serviços
    }
    return service.category === selectedCategory; // Filtra pela categoria
  });

  return (
    <div className="my-5">
      {loading ? (
        <p className="text-primary font-bold text-2xl text-center">Carregando...</p>
      ) : (
        <CustomCarousel
          items={filteredServices.map((service) => ({
            title: service.title,
            description: service.description,
            image: service.image,
            duration: service.duration ? `${service.duration} min` : null,
            price: service.price ? `R$ ${service.price}` : null,
            buttonText: "Adicionar Serviço",
            icon: true,
            onClick: () => onSelect(service),
          }))}
        />
      )}
    </div>
  );
};

export default ServicesStep;
