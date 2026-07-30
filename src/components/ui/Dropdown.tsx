import { DropDownProps } from "../../types/Dropdown.types";

function DropDown({ description, options, direction, selectorStyle }: DropDownProps) {
  return (
    <>
      {
        (direction === "vertical") ?
          <div className={`flex flex-col items-start justify-center gap-3`}>
            <label className="text-black text-left text-lg font-medium pt-2">{description}</label>
            <select name={description} id={description + "select"} className={`bg-secondary $ rounded-lg ${selectorStyle}
            text-center border border-black cursor-pointer hover:bg-[#cacaca]`}>
              <option value={""} disabled selected className="text-fields cursor-pointer">--Seleccione una opcion--</option>
              {
                options.map((op) => (
                  <option value={op.toLowerCase()}>
                    {op}
                  </option>   
                )
              )};
            </select>
          </div>   
        :
          <div className={`flex items-center gap-9 px-5 m-2`}>
            <label className="text-black text-left text-lg font-medium">{description}</label>
            <select name={description} id={description + "select"} className={`bg-secondary ${selectorStyle} rounded-lg 
            text-center border border-black cursor-pointer hover:bg-[#cacaca]`}>
              <option value={""} disabled selected className="text-fields cursor-pointer">--Seleccione una opcion--</option>
              {
                options.map((op) => (
                  <option value={op.toLowerCase()}>
                    {op}
                  </option>   
                )
              )};
            </select>
          </div>    
      }
    </>
  );
}

export default DropDown;