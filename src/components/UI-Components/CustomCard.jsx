import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TimerIcon } from "lucide-react";
import { Button } from "../ui/button";

const CustomCard = ({ title, description, image, price, duration, buttonText, onClick, icon }) => {
  return (
    <Card className="w-full shadow-md rounded-lg">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
