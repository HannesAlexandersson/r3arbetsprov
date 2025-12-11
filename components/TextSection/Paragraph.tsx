import { cn } from "@/utils/utils";
import { Paragraphprops } from "./TextSections.types";

const Paragraph: React.FC<Paragraphprops> = ({
  paragraphs,
  className,
  ...props
}) => {
  return (
    <p className={cn("text-primarytext font-sans-dm", className)} {...props}>
      {paragraphs}
    </p>
  );
};

export default Paragraph;
