import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smile, PersonStanding } from "lucide-react";

const CategoryStep = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Escolha o Tipo de Procedimento</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant={selected === "Facial" ? "default" : "outline"}
          className="flex items-center gap-3 p-6 w-full md:w-64 justify-center"
          onClick={() => handleSelection("Facial")}
        >
          <Smile className="w-6 h-6" />
          Facial
        </Button>

        <Button
          variant={selected === "Corporal" ? "default" : "outline"}
          className="flex items-center gap-3 p-6 w-full md:w-64 justify-center"
          onClick={() => handleSelection("Corporal")}
        >
          <PersonStanding className="w-6 h-6" />
          Corporal
        </Button>
      </div>
    </div>
  );
};

export default CategoryStep;
