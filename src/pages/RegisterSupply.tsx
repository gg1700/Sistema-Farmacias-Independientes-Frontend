import { FaPlus } from "react-icons/fa";
import SearchSelector from "../components/features/SearchSelector";
import { supplyList } from "../constants/supplies";
import RegisterTable from "../components/features/RegisterTable";
import { DropDownProps } from "../types/Dropdown.types";
import { ActionButtonProps } from "../types/ActionButton.types";
import { Supplies } from "../types/RegisterTable.types";
import { supplierList } from "../constants/supplier";

function RegisterSupply() {
  const dropDown : DropDownProps = {
    description: "Proveedor",
    options: supplierList.map((s) => (
      s.name
    ))
  };
  const actionButton : ActionButtonProps = {
    bgColor: "#ADA87F",
    hoverColor: "#41B589",
    IconName: FaPlus,
    action: "Añadir"
  };

  const newSupplyList : Supplies[] = [];
  supplyList.forEach(sup => {
    const newSupply : Supplies = {
      id: sup.id,
      name: sup.name,
      quantity: sup.quantity,
      category: sup.category,
      subcategory: sup.subcategory,
      unitPrice: sup.unitPrice,
      expirationDate: sup.expirationDate,
      batch: sup.batch
    };
    newSupplyList.push(newSupply);
  })

  const testHeader = ["Nom.", "Cant.", "Cat.", "Subcat.", "P. Unit.", "Fec. Vto.", "Lote"];

  return (
    <section className="flex flex-col justify-center items-center w-full h-full gap-3 px-4">
      <SearchSelector subtitle="Datos de Compra" dropDownProps={dropDown} actionButtonProps={actionButton}>
      </SearchSelector>

      <div className="w-full overflow-x-auto flex justify-center">
        <RegisterTable tableStyles="w-256 max-w-5xl h-87" buttonStyles="gap-6 sm:gap-12 md:gap-20" subtitle={"Productos Comprados"} header={testHeader}
        registers={newSupplyList} pagination={4}>
        </RegisterTable>
      </div>
    </section>
  );
}

export default RegisterSupply;