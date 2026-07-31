import { useNavigate } from "react-router-dom";
import { OptionWorkSpaceProps } from "../../types/OptionWorkSpace.types";
import OptionButton from "../ui/OptionButton";

function OptionWorkSpace({ options }: OptionWorkSpaceProps) {
  const navigate = useNavigate();

  return (
    <ul>
      {
        options.map(op => (
          <li key={op.id}>
            <OptionButton description={op.description} clickAction={() => navigate(op.path)}>
              <op.IconName size={60} color={"#0C6441"}></op.IconName>
            </OptionButton>
          </li>
        )
      )};
    </ul>
  );
}

export default OptionWorkSpace;