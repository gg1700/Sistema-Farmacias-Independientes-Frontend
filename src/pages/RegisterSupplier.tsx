import RegisterForm from "../components/features/RegisterForm";
import { FaPlus } from "react-icons/fa";
import { TextFieldProps } from "../types/TextField.types";
import { InputElement } from "../types/RegisterForm.types";

function RegisterSupplier() {
  const actionButton = {
    bgColor: "#E0DAB2",
    hoverColor: "#82d9b6",
    IconName: FaPlus,
    action: "action"
  }
  const textField : TextFieldProps = {
    label: "Nombre:",
    size: 30
  }
  const textFieldV : TextFieldProps = {
    label: "Correo Electronico:",
    size: 41,
    direction: "vertical"
  }
  const inputs : InputElement[] = [
    { id: 1, inputType: "textField", textFieldProps: textField },
    { id: 2, inputType: "textField", textFieldProps: { ...textField, label: "Direccion:" } },
    { id: 3, inputType: "textField", textFieldProps: { ...textField, label: "Telefono:" } },
    { id: 4, inputType: "textField", textFieldProps: textFieldV }
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8 h-152 p-8">
      <RegisterForm className="items-center w-175" subtitle={"Datos de Proveedor"} inputs={inputs} actionButtonProps={actionButton}>
      </RegisterForm>
    </section>
  );
}

export default RegisterSupplier;