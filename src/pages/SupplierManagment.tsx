import { optionList } from "../constants/options";
import OptionWorkSpace from "../components/features/OptionWorkSpace";

function SupplierManagmentPage() {
  return (
    <>
      {/*
      <OptionButton optionText="Boton de Prueba">
        <MdGroupAdd size={60} color={"#0C6441"}/>
      </OptionButton>

      <OptionButton optionText="Reportes de Proveedores Existentes">
        <MdGroupAdd size={60} color={"#0C6441"}/>
      </OptionButton>
      */}

      <section className="flex flex-col justify-center items-center gap-8 h-full p-0">
        <OptionWorkSpace options={optionList.slice(0, 3)}>
        </OptionWorkSpace>
      </section>
    </>
  );
}

export default SupplierManagmentPage;