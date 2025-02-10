import { useState } from "react";
import AddressStep from "@/components/Agendamento/Etapas/AddressStep";
import CategoryStep from "@/components/Agendamento/Etapas/CategoryStep";
import ServicesStep from "@/components/Agendamento/Etapas/ServicesStep";
import DateTimeStep from "@/components/Agendamento/Etapas/DateTimeStep"; // Etapa de data e hora
import { Button } from "@/components/ui/button";

const PaginatedForm = () => {
  const [formData, setFormData] = useState({
    address: null,
    category: null,
    dateTime: null,
    services: [],
  });

  const handleSelectAddress = (address) => {
    setFormData((prevData) => ({
      ...prevData,
      address,
    }));
  };

  const handleSelectCategory = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      category,
    }));
  };

  const handleSelectDateTime = (dateTime) => {
    setFormData((prevData) => ({
      ...prevData,
      dateTime,
    }));
  };

  const handleSelectService = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: [...prevData.services, service],
    }));
  };

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      component: <AddressStep onSelect={handleSelectAddress} />,
      isValid: formData.address !== null,
    },
    {
      component: <CategoryStep onSelect={handleSelectCategory} />,
      isValid: formData.category !== null,
    },
    {
      component: <ServicesStep onSelect={handleSelectService} selectedCategory={formData.category} />,
      isValid: formData.services.length > 0,
    },
    {
      component: <DateTimeStep onSelect={handleSelectDateTime} />,
      isValid: formData.dateTime !== null,
    },
    {
      component: (
        <div>
          <h2>Resumo do Agendamento</h2>
          <p><strong>Endereço:</strong> {formData.address}</p>
          <p><strong>Categoria:</strong> {formData.category}</p>
          <p><strong>Data e Hora:</strong> {formData.dateTime}</p>
          <p><strong>Serviços Selecionados:</strong></p>
          <ul>
            {formData.services.map((service, index) => (
              <li key={index}>{service.title}</li>
            ))}
          </ul>
        </div>
      ),
      isValid: true,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1 && steps[currentStep].isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 mt-20 w-full min-h-screen">
      <div className="w-full">{steps[currentStep].component}</div>

      <div className="flex justify-between mt-6 w-fit">
        <Button
          onClick={handlePrev}
          disabled={currentStep === 0}
          variant="outline"
          className="mr-2"
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
          disabled={!steps[currentStep].isValid}
          className="ml-2"
        >
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default PaginatedForm;
