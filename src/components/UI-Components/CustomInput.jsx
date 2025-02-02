import { Input as UiInput } from "../ui/input";
import { Label } from "../ui/label";

const CustomInput = ({ label, type = "text", value, onChange, name, id, placeholder, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <UiInput
        className="w-full"
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...props} // Permite passar mais propriedades, como placeholder, disabled, etc.
      />
      {error && <span className="text-destructive">{error}</span>}
    </div>
  );
};

export default CustomInput;
