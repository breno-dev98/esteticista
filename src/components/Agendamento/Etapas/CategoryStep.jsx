import { useState } from "react";
import { Smile, PersonStanding } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";


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
      <Card
          className={cn(
            "flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-all duration-300",
            selected === "Facial" ? "border-primary bg-primary/10 shadow-lg" : "hover:shadow-md"
          )}
          onClick={() => handleSelection("Facial")}
        >
          <Smile className="w-12 h-12 md:w-32 md:h-32 text-primary" />
          <span className="mt-3 font-medium text-gray-700">Facial</span>
        </Card>

        {/* Opção Domiciliar */}
        <Card
          className={cn(
            "flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-all duration-300",
            selected === "Corporal" ? "border-primary bg-primary/10 shadow-lg" : "hover:shadow-md"
          )}
          onClick={() => handleSelection("Corporal")}
        >
          <PersonStanding className="w-12 h-12 md:w-32 md:h-32 text-primary" />
          <span className="mt-3 font-medium text-gray-700">Corporal</span>
        </Card>
      </div>
    </div>
  );
};

export default CategoryStep;
