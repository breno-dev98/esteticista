import { Button } from "../ui/button";

const CustomButton = ({text = 'Clique aqui', type, disabled,onClick}) => {
    return ( 
        <Button onClick={onClick} type={type} disabled={disabled}>
            {text}
        </Button>
     );
}
 
export default CustomButton;