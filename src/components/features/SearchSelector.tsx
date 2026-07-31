import DropDown from "../ui/Dropdown";
import ActionButton from "../ui/ActionButton";
import { SearchSelectorProps } from "../../types/SearchSelector.types";

function SearchSelector({ subtitle, dropDownProps, actionButtonProps }: SearchSelectorProps) {
  const { description, options } = dropDownProps;
  const { bgColor, hoverColor, IconName, action } = actionButtonProps;

  return (
    <section className="flex flex-col justify-center items-center w-full px-4">
      <h2 className="text-black text-center font-medium text-2xl p-3">{subtitle}</h2>
      <div className="bg-modals flex flex-col md:flex-row items-center w-full md:w-5xl md:h-14 rounded-2xl p-4 gap-3 md:gap-5 shadow-sm">
        <div className="w-full md:w-auto">
          <DropDown selectorStyle="w-full md:w-md" description={description} options={options}>
          </DropDown>
        </div>
        <div className="flex justify-center border-t-2 md:border-t-0 md:border-l-2 border-[#ADA87F] px-4 md:px-20 py-2 md:py-0.5 m-0 md:m-4 gap-1 w-full md:w-auto">
          <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={IconName} action={action}>
          </ActionButton>
        </div>
      </div>  
    </section>
  );
}

export default SearchSelector;