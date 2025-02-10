import CustomCard from "@/components/UI-Components/CustomCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ServicesStep = () => {
  const [services, setServices] = useState([])
  const [filter, setFilter] = useState("Todos");
  const getServices = async () => {
    const res = await axios.get('http://localhost:3000/api/servicos');
    setServices(res.data)
  }

  useEffect(() => {
    getServices()
  }, []);

  const filteredServices = services.filter((service) => {
    if (filter === "Todos") {
      return true; // Exibe todos os serviços
    }
    return service.category === filter; // Filtra pela categoria
  });

  return (
    <div className="my-20">
      <div className="flex gap-1 justify-end">
        <span className="font-semibold mt-1">Ordenar por:</span>
        <select className="border rounded-md border-gray-300 p-1 mb-2" name="orderService" id="orderService" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Facial">Facial</option>
          <option value="Corporal">Corporal</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredServices.map((service) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CustomCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              duration={service.duration + " min"}
              price={"R$" + service.price}
              buttonText={"Agendar"}
              icon={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesStep;
