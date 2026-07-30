import DropDown from "../ui/Dropdown";
import ActionButton from "../ui/ActionButton";
import { SearchSelectorProps } from "../../types/SearchSelector.types";

function SearchSelector({ subtitle, dropDownProps, actionButtonProps }: SearchSelectorProps) {
  const { description, options } = dropDownProps;
  const { bgColor, hoverColor, IconName, action, clickAction } = actionButtonProps;

  return (
    <section className="flex flex-col justify-center items-center w-full px-4">
      <h2 className="text-black text-center font-medium text-2xl p-2">{subtitle}</h2>
      <div className="bg-modals flex flex-col md:flex-row items-center w-full max-w-5xl rounded-2xl px-6 py-3 gap-3 shadow-sm">
        <div>
          <DropDown selectorStyle="w-full max-w-xs md:w-md" description={description} options={options}>
          </DropDown>
        </div>
        <div className="flex justify-center border-t-2 md:border-t-0 md:border-l-2 border-[#ADA87F] px-4 md:px-8 py-2 md:py-0 gap-1 w-full md:w-auto">
          <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={IconName} action={action} clickAction={clickAction}>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}

export default SearchSelector;