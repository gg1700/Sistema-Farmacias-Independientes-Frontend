import { optionList } from "../constants/options";
import OptionWorkSpace from "../components/features/OptionWorkSpace";

function SupplyRequestsManagment() {
  console.log(optionList.slice(4, 6));
  return (
    <section className="flex flex-col justify-center items-center gap-8 h-screen p-8">
      <OptionWorkSpace options={optionList.slice(3, 5)}>
      </OptionWorkSpace>
    </section>
  );
}

export default SupplyRequestsManagment;