import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const alertTypes = {
  success: {
    icon: CheckCircle,
    baseStyle: "bg-green-100 text-green-800 border-green-500",
  },
  error: {
    icon: XCircle,
    baseStyle: "bg-red-100 text-red-800 border-red-500",
  },
  warning: {
    icon: AlertTriangle,
    baseStyle: "bg-yellow-100 text-yellow-800 border-yellow-500",
  },
  info: {
    icon: Info,
    baseStyle: "bg-blue-100 text-blue-800 border-blue-500",
  },
};

const CustomAlert = ({ type = "info", message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const { icon: Icon, baseStyle } = alertTypes[type] || alertTypes.info;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between max-w-full sm:max-w-md p-4 border rounded-lg shadow-md text-sm sm:text-base",
        baseStyle
      )}
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="flex-1">{message}</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="mt-2 sm:mt-0"
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
      >
        Fechar
      </Button>
    </div>
  );
};

export default CustomAlert;
