import DropDown from "../ui/Dropdown";
import ActionButton from "../ui/ActionButton";
import { SearchSelectorProps } from "../../types/SearchSelector.types";

function SearchSelector({ subtitle, dropDownProps, actionButtonProps }: SearchSelectorProps) {
  const { description, options } = dropDownProps;
  const { bgColor, hoverColor, IconName, action } = actionButtonProps;
  
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-black text-center font-medium text-2xl p-3">{subtitle}</h2>
        <div className="bg-modals flex items-center w-5xl h-14 rounded-2xl p-4 gap-5 shadow-sm">
          <div>
            <DropDown selectorStyle="w-md" description={description} options={options}>
            </DropDown>
          </div>
          <div className="flex justify-center border-l-2 border-[#ADA87F] px-20 py-0.5 m-4 gap-1">
            <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={IconName} action={action}>
            </ActionButton>
          </div>
        </div>  
      </section>
    </>
  );
}

export default SearchSelector;