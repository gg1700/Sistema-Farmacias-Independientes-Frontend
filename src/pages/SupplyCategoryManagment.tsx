import { optionList } from "../constants/options";
import OptionWorkSpace from "../components/features/OptionWorkSpace";

function SupplyCategoryManagment() {
  return (
    <section className="flex flex-col justify-center items-center h-screen gap-8 p-8">
      <OptionWorkSpace options={optionList.slice(5, 7)}>
      </OptionWorkSpace>
    </section>
  );
}

export default SupplyCategoryManagment;