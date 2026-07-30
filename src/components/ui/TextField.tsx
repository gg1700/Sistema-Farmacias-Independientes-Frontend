import { TextFieldProps } from "../../types/TextField.types";

function TextField({ label, size, direction }: TextFieldProps) {
  return (
    <>
      {
        (direction === "vertical") ?
          <div className="flex flex-col items-start justify-center gap-3 px-5 py-2 m-2">
            <label className="text-black text-left text-lg font-medium">{label}</label>
            <input type="text" id={`${label}-input`} size={size}
              className="bg-secondary resize-none border border-black rounded-lg px-2"
            />
          </div>
        :
          <div className={"flex items-center gap-9 px-5 py-2 m-2"}>
            <label className="text-black text-left text-lg font-medium w-16">{label}</label>
            <input type="text" id={`${label}-input`} size={size}
              className="bg-secondary resize-none border border-black rounded-lg px-2"
            />
          </div>
      }
    </> 
  );
}

export default TextField;