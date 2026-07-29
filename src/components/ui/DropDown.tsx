import { DropDownProps } from "../../types/DropDown.types";

function DropDown({ description, options }: DropDownProps) {
  return (
    <>
      <div className="flex items-center gap-9 px-5 m-2">
        <h3 className="text-black text-left text-lg font-medium">{description}</h3>
        <select name={description} id={description + "select"} className="bg-[#E6E6E6] w-md rounded-lg 
        text-center border border-black] cursor-pointer hover:bg-[#cacaca]">
          <option value={""} disabled selected className="text-[#666666] cursor-pointer">--Seleccione una opcion--</option>
          {
            options.map((op) => (
              <option value={op.toLowerCase()}>
                {op}
              </option>   
            )
          )};
        </select>
      </div>
    </>
  );
}

export default DropDown;