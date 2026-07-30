import { FaPlus } from "react-icons/fa";
import SearchSelector from "../components/features/SearchSelector";
import { supplyList } from "../constants/supplies";
import RegisterTable from "../components/features/RegisterTable";
import { DropDownProps } from "../types/Dropdown.types";
import { ActionButtonProps } from "../types/ActionButton.types";
import { Supplies } from "../types/RegisterTable.types";

function RegisterSupply() {
  const dropDown : DropDownProps = {
    description: "Proveedor",
    options: ["Pedri", "Yamal", "Messi", "Mbappe"]
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
      name: sup.Nom,
      amount: sup.Cant,
      category: sup.Cat,
      subcategory: sup.Subcat,
      unitPrice: sup["P.Unit"],
      expirationDate: sup["Fec. Vto."],
      batch: sup.Lote
    };
    newSupplyList.push(newSupply);
  })

  const testHeader = ["Nom.", "Cant.", "Cat.", "Subcat.", "P. Unit.", "Fec. Vto.", "Lote"];

  return (
    <section className="flex flex-col justify-center items-center h-full gap-3">
      <SearchSelector subtitle="Datos de Compra" dropDownProps={dropDown} actionButtonProps={actionButton}>
      </SearchSelector>

      <RegisterTable tableStyles="w-5xl h-87" buttonStyles="gap-20" subtitle={"Productos Comprados"} header={testHeader} 
      registers={newSupplyList} pagination={4}>
      </RegisterTable>
    </section>
  );
}

export default RegisterSupply;