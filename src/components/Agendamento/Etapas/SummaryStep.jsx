import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const SummaryStep = ({ formData }) => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Resumo do Agendamento</h2>
      <Card className="w-full p-6 border rounded-lg shadow-md">
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-primary">Endereço:</strong> {formData.address}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-primary">Categoria:</strong> {formData.category}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-primary">Data e Hora:</strong> {" "}
          {formData.dateTime?.date
            ? format(new Date(formData.dateTime.date), "dd/MM/yyyy", {
                locale: ptBR,
              })
            : "Nenhuma data selecionada"} {" "}
          às {formData.dateTime?.time}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong className="text-primary">Serviços Selecionados:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700">
          {formData.services.map((service, index) => (
            <li key={index} className="text-md">
              {service.title}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SummaryStep;
