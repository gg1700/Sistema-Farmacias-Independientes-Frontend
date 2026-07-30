import { FaPlus } from "react-icons/fa";
import { DropDownProps } from "../types/Dropdown.types";
import { TextFieldProps } from "../types/TextField.types";
import { InputElement } from "../types/RegisterForm.types";
import { Supplies } from "../types/RegisterTable.types";
import { supplyList } from "../constants/supplies";
import RegisterForm from "../components/features/RegisterForm";
import RegisterTable from "../components/features/RegisterTable";

function RegisterSupplyCategory() {
  const actionButton = {
    bgColor: "#E0DAB2",
    hoverColor: "#82d9b6",
    IconName: FaPlus,
    action: "action"
  }
  const dropDown : DropDownProps = {
    description: "Subcategoria:",
    options: ["Pedri", "Yamal", "Messi", "Mbappe"],
    direction: "vertical",
    selectorStyle: "w-[320px]"
  };
  const textField : TextFieldProps = {
    label: "Nombre de la Categoria:",
    size: 33,
    direction: "vertical"
  }
  const inputs : InputElement[] = [
    { id: 1, inputType: "textField", textFieldProps: textField },
    { id: 2, inputType: "dropdown-type2", dropDownProps: dropDown },
  ];

  const newSupplyList : Partial<Supplies>[] = [];
  supplyList.forEach(sup => {
    const newSupply : Partial<Supplies> = {
      id: sup.id,
      name: sup.Nom,
      amount: sup.Cant
    };
    newSupplyList.push(newSupply);
  })

  const testHeader = ["Nombre", "Cantidad"];

  return (
    <section className="flex items-center justify-center gap-x-30">
      <RegisterForm className="items-start w-172" subtitle={"Datos de Categoria"} inputs={inputs} actionButtonProps={actionButton}>
      </RegisterForm>

      <RegisterTable tableStyles="w-lg h-110" buttonStyles="gap-12" subtitle={"Categorias Existentes"} header={testHeader} 
      registers={newSupplyList} pagination={5}>
      </RegisterTable>
    </section>
  );
}

export default RegisterSupplyCategory;