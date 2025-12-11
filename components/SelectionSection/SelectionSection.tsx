import { selectionTexts } from "@/lib/texts";
import Selection from "./Selection";

const SelectionSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full ">
      <Selection
        title={selectionTexts.ourHouses.title}
        imageSrc={selectionTexts.ourHouses.imageSrc}
        btnDescription={selectionTexts.ourHouses.btnDescription}
      />
      <Selection
        title={selectionTexts.accessores.title}
        imageSrc={selectionTexts.accessores.imageSrc}
        btnDescription={selectionTexts.accessores.btnDescription}
      />
    </div>
  );
};

export default SelectionSection;
