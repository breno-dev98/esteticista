import { useState } from "react";
import { Home, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const AddressStep = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800">Escolha o local de atendimento</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Opção Clínica */}
        <Card
          className={cn(
            "flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-all duration-300",
            selected === "clinica" ? "border-primary bg-primary/10 shadow-lg" : "hover:shadow-md"
          )}
          onClick={() => handleSelect("clinica")}
        >
          <Building2 className="w-12 h-12 text-primary" />
          <span className="mt-3 font-medium text-gray-700">Na Clínica</span>
        </Card>

        {/* Opção Domiciliar */}
        <Card
          className={cn(
            "flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-all duration-300",
            selected === "domiciliar" ? "border-primary bg-primary/10 shadow-lg" : "hover:shadow-md"
          )}
          onClick={() => handleSelect("domiciliar")}
        >
          <Home className="w-12 h-12 text-primary" />
          <span className="mt-3 font-medium text-gray-700">Domiciliar</span>
        </Card>
      </div>
    </div>
  );
};

export default AddressStep;
