
import { OptionWorkSpaceProps } from "../../types/OptionWorkSpace.types";
import OptionButton from "../ui/OptionButton";

function OptionWorkSpace({ options }: OptionWorkSpaceProps) {
  return (
    <ul>
      {
        options.map(op => (
          <li key={op.id}>
            <OptionButton description={op.description}>
              <op.IconName size={60} color={"#0C6441"}></op.IconName>
            </OptionButton>
          </li>
        )
      )};
    </ul>
  );
}

export default OptionWorkSpace;