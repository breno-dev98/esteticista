import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TimerIcon } from "lucide-react";
import { Button } from "../ui/button";

const CustomCard = ({ title, description, image, price, category, duration, buttonText, onClick, icon }) => {
  return (
    <Card className="w-full shadow-md rounded-lg flex flex-col h-full"> {/* Adicionei o flex e h-full aqui */}
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1"> {/* Adicionei flex-1 para permitir que o conteúdo ocupe o restante do espaço */}
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">{price}</span>
          
          <span className="text-gray-500 flex items-center gap-1">
            {icon && duration && <TimerIcon size={20} />} {duration}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        {buttonText && (
          <Button onClick={onClick} className="w-full">
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
