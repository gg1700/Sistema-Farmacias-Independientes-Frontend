import { useRef } from 'react';
import { FaPlus } from "react-icons/fa";
import { DropDownProps } from "../types/Dropdown.types";
import { TextAreaProps } from "../types/TextArea.types";
import { TextFieldProps } from "../types/TextField.types";
import { InputElement } from "../types/RegisterForm.types";
import { Supplies } from "../types/RegisterTable.types";
import { supplyList } from "../constants/supplies";
import RegisterForm from "../components/features/RegisterForm";
import RegisterTable from "../components/features/RegisterTable";
import { useModal } from "../contexts/ModalContext";
import { SupplyRequestConfirmModal } from "../components/modals/SupplyRequestConfirmModal";

function RegisterSupplyRequest() {
  const { openModal } = useModal();
  const formRef = useRef<HTMLFormElement | null>(null);

  const actionButton = {
    bgColor: "#E0DAB2",
    hoverColor: "#82d9b6",
    IconName: FaPlus,
    action: "action",
    clickAction: () => {
      const proveedorEl = document.getElementById('Proveedorselect') as HTMLSelectElement;
      const descripcionEl = document.getElementById('Descripcion-input') as HTMLTextAreaElement;
      const nombreEl = document.getElementById('Nombre del Producto:-input') as HTMLInputElement;
      const cantidadEl = document.getElementById('Cantidad:-input') as HTMLInputElement;
      openModal(
        <SupplyRequestConfirmModal
          proveedor={proveedorEl?.value || ''}
          descripcion={descripcionEl?.value || ''}
          nombreProducto={nombreEl?.value || ''}
          cantidad={cantidadEl?.value || ''}
          onConfirm={() => {
            console.log('Solicitud confirmada');
          }}
        />
      );
    }
  }
  const dropDown : DropDownProps = {
    description: "Proveedor",
    options: ["Pedri", "Yamal", "Messi", "Mbappe"],
    direction: "vertical",
    selectorStyle: "w-md"
  };
  const textArea : TextAreaProps = {
    label: "Descripcion",
    cols: 46,
    rows: 4,
    placeholder: "Proveedor de Bago para Analgésicos..."
  }
  const textField : TextFieldProps = {
    label: "Nombre del Producto:",
    size: 46,
    direction: "vertical"
  }
  const inputs : InputElement[] = [
    { id: 1, inputType: "dropdown", dropDownProps: dropDown },
    { id: 2, inputType: "textArea", textAreaProps: textArea },
    { id: 3, inputType: "textField", textFieldProps: textField },
    { id: 4, inputType: "textField", textFieldProps: { ...textField, label: "Cantidad:" } }
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
      <RegisterForm className="items-center w-175" subtitle={"Datos de Proveedor"} inputs={inputs} actionButtonProps={actionButton}
        formRef={formRef} />


      <RegisterTable tableStyles="w-lg h-115" buttonStyles="gap-12" subtitle={"Productos Comprados"} header={testHeader} 
      registers={newSupplyList} pagination={5}>
      </RegisterTable>
    </section>
  );
}

export default RegisterSupplyRequest;