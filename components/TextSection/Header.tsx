import { cn } from "@/utils/utils";
import { HeaderProps } from "./TextSections.types";

const Header: React.FC<HeaderProps> = ({ text, className, ...props }) => {
  return (
    <h2 className={cn("text-primarytext font-mono-dm ", className)} {...props}>
      {text}
    </h2>
  );
};

export default Header;
