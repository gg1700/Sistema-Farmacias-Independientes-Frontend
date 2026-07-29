import { OptionButtonProps } from "../../types/OptionButton.types";

function OptionButton({ children, description }: OptionButtonProps) {
  return (
    <>
      <div className="flex items-center gap-9 p-4 m-10">
        <button className="bg-modals shadow-md p-2 size-24 flex items-center justify-center rounded-full hover:bg-[#82d9b6] hover:scale-105 hover:cursor-pointer transition-transform">
          {children}
        </button>
        <h2 className="font-bold text-primary text-3xl max-w-[320px] hover:scale-105 transition-transform">{description}</h2>
      </div>
    </>
  );
}

export default OptionButton;