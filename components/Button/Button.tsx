import { cn } from "@/utils/utils";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center font-sans-dm font-normal uppercase text-[15px]",
        className
      )}
      {...props}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
