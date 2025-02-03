import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { isSunday, format, isEqual, isBefore } from "date-fns";
import { ptBR } from "date-fns/locale";

// Lista de feriados nacionais (Brasil) em 2025 - Pode ser atualizada
const feriados = [
  "2025-01-01", // Ano Novo
  "2025-04-18", // Sexta-feira Santa
  "2025-05-01", // Dia do Trabalhador
  "2025-09-07", // Independência do Brasil
  "2025-10-12", // Nossa Senhora Aparecida
  "2025-11-02", // Finados
  "2025-11-15", // Proclamação da República
  "2025-12-25", // Natal
];

// Horários disponíveis
const horariosSemana = ["09:00", "10:00", "11:00", "13:00", "15:00", "16:00", "17:00"];
const horariosSabado = ["08:00", "10:00", "12:00"];

const DateTimeStep = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (!selectedDate) return;

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const isHoliday = feriados.includes(formattedDate);
    const dayOfWeek = selectedDate.getDay();

    if (isSunday(selectedDate) || isHoliday) {
      setAvailableTimes([]);
    } else {
      setAvailableTimes(dayOfWeek === 6 ? horariosSabado : horariosSemana);
    }
  }, [selectedDate]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Escolha a Data do Atendimento</h2>
      
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ptBR}
        className="border rounded-lg p-4 mb-4"
        disabled={(date) => isSunday(date) || feriados.includes(format(date, "yyyy-MM-dd")) || isBefore(date, new Date())}
      />

      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Horários disponíveis:</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <Button
                  key={time}
                  className={`w-full ${selectedTime === time ? "bg-violet-700 text-white" : "bg-white border"} ${selectedTime === time ? "hover:bg-violet-700" : "hover:bg-gray-100"}`}
                  variant="outline"
                  onClick={() => {
                    setSelectedTime(time); // Atualiza a hora selecionada
                    onSelect({ date: selectedDate, time }); // Passa para o pai
                  }}
                >
                  {time}
                </Button>
              ))
            ) : (
              <p className="text-red-500">Nenhum horário disponível para essa data.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimeStep;
