import CustomCard from "@/components/UI-Components/CustomCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ServicesStep = ({ selectedCategory, onSelect }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServices = async () => {
    try {
      setLoading(false);
      const res = await axios.get("http://localhost:3000/api/servicos");
      setServices(res.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    } finally {
      setLoading(true);
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
    <div className="my-20">
      <div className="flex flex-wrap justify-center gap-6">
        {!loading ? (
          <p className="text-primary font-bold text-2xl">Carregando...</p>
        ) : (
          <>
            {filteredServices.map((service) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                key={service.id}
              >
                <CustomCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  duration={service.duration + " min"}
                  price={"R$" + service.price}
                  buttonText={"Adicionar Serviço"}
                  icon={true}
                  onClick={() => onSelect(service)} // Chama o callback onSelect para atualizar os serviços selecionados
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesStep;
