import DropDown from "../ui/DropDown";
import ActionButton from "../ui/ActionButton";
import { SearchSelectorProps } from "../../types/SearchSelector.types";

function SearchSelector({ subtitle, dropDownProps, actionButtonProps }: SearchSelectorProps) {
  const { description, options } = dropDownProps;
  const { bgColor, hoverColor, IconName, action } = actionButtonProps;
  
  return (
    <>
      <section className="flex flex-col justify-center items-center m-7">
        <h2 className="text-black text-center font-medium text-2xl p-2">{subtitle}</h2>
        <div className="bg-modals flex items-center w-4xl h-14 rounded-2xl py-4 px-6 gap-1 shadow-sm">
          <div>
            <DropDown description={description} options={options}>
            </DropDown>
          </div>
          <div className="border-l-2 border-[#ADA87F] px-4 py-0.5 m-4">
            <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={IconName} action={action}>
            </ActionButton>
          </div>
        </div>  
      </section>
    </>
  );
}

export default SearchSelector;