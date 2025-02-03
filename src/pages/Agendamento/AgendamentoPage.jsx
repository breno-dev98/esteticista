import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddressStep from "@/components/Agendamento/Etapas/AddressStep";
import CategoryStep from "@/components/Agendamento/Etapas/CategoryStep";
import DateTimeStep from "@/components/Agendamento/Etapas/DateTimeStep";

const PaginatedForm = () => {
  const [currentStep, setCurrentStep] = useState(0); // Etapa inicial
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const steps = [
    {
      component: <AddressStep onSelect={setSelectedAddress} />,
      isValid: selectedAddress !== null, // Verificação da validade do estado
    },
    {
      component: <CategoryStep onSelect={setSelectedCategory} />,
      isValid: selectedCategory !== null, // Verificação da validade do estado
    },
    {
      component: <DateTimeStep onSelect={setSelectedDateTime}/>,
      isValid: selectedDateTime !== null, // Última etapa sempre válida
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
          disabled={!steps[currentStep].isValid} // Desabilita o botão "Avançar" se o estado da etapa for inválido
          className="ml-2"
        >
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default PaginatedForm;
