import { OptionButtonProps } from "../../types/OptionButton.types";

function OptionButton({ children, description, clickAction }: OptionButtonProps) {
  return (
    <>
      <div className="flex items-center gap-9 p-4 m-10 hover:scale-105 transition-transform group">
        <button className="bg-modals shadow-md p-2 size-24 flex items-center justify-center rounded-full 
        group-hover:bg-[#82d9b6] group-hover:scale-105 group-hover:cursor-pointer transition-transform"
        onClick={clickAction}>
          {children}
        </button>
        <h2 className="font-bold text-primary text-3xl max-w-[320px] group-hover:underline">{description}</h2>
      </div>
    </>
  );
}

export default OptionButton;