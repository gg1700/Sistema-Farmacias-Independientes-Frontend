import { useRef } from 'react';
import { RegisterFormProps } from "../../types/RegisterForm.types";
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { InputElement } from "../../types/RegisterForm.types";
import ActionButton from "../ui/ActionButton";
import DropDown from "../ui/Dropdown";
import TextField from "../ui/TextField";
import TextArea from "../ui/TextArea";

function RegisterForm({ subtitle, inputs, actionButtonProps, className, onAddSubcategory, formRef }: RegisterFormProps) {
  const { bgColor, hoverColor, clickAction } = actionButtonProps;
  const internalFormRef = useRef<HTMLFormElement | null>(null);

  const setFormRef = (el: HTMLFormElement | null) => {
    internalFormRef.current = el;
    if (formRef) {
      (formRef as React.MutableRefObject<HTMLFormElement | null>).current = el;
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-black text-center font-medium text-2xl py-5">{subtitle}</h2>
      <form ref={setFormRef} className={`bg-modals flex flex-col justify-center p-3 ${className} rounded-xl shadow-sm`}>
        {
          inputs.map((inp: InputElement) => (
            (inp.inputType.includes("dropdown")) ?
              (inp.inputType.includes("type2")) ?
                <div className={`flex items-end justify-start gap-16 border-t-2 border-[#ADA87F] px-10 py-4 -mx-3`}>
                  <DropDown key={`${subtitle}-${inp.id}`} selectorStyle={inp.dropDownProps!.selectorStyle} description={inp.dropDownProps!.description} 
                  options={inp.dropDownProps!.options} direction={inp.dropDownProps!.direction}>
                  </DropDown>
                  <ActionButton dimentions="w-52" padding="px-5 py-2" bgColor={"#ADA87F"} hoverColor={"#41B589"} IconName={FaPlus} 
                  action={"Añadir Subcategoria"} clickAction={onAddSubcategory}>
                  </ActionButton>
                </div>
              :
                <DropDown key={`${subtitle}-${inp.id}`} selectorStyle={inp.dropDownProps!.selectorStyle} description={inp.dropDownProps!.description} 
                options={inp.dropDownProps!.options} direction={inp.dropDownProps!.direction}>
                </DropDown>
            :
              (inp.inputType === "textField") ?
                <TextField key={`${subtitle}-${inp.id}`} label={inp.textFieldProps!.label} size={inp.textFieldProps!.size}
                direction={inp.textFieldProps!.direction}>
                </TextField>
              :
                <TextArea key={`${subtitle}-${inp.id}`} label={inp.textAreaProps!.label} cols={inp.textAreaProps!.cols}
                rows={inp.textAreaProps!.rows} placeholder={inp.textAreaProps!.placeholder}>
                </TextArea>
            )
          )
        }
      </form>
      <div className="flex items-center justify-center px-3 py-5 gap-8">
        <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={FaPlus} action={"Añadir"} typeButton={"submit"} clickAction={clickAction}>
        </ActionButton>
        <ActionButton bgColor={bgColor} hoverColor={hoverColor} IconName={IoCloseSharp} action={"Cancelar"} clickAction={() => internalFormRef.current?.reset()}>
        </ActionButton>
      </div>
    </section>
  );
}

export default RegisterForm;