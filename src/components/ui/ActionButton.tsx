import { useState } from "react";
import { ActionButtonProps } from "../../types/ActionButton.types";

function ActionButton({ bgColor, hoverColor, IconName, action, clickAction }: ActionButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <button className={`flex items-center justify-center h-6 w-44 gap-2.5 px-5 py-4 m-2 rounded-lg 
    border border-black hover:scale-105 transition-transform`}
    style={{ backgroundColor: hover ? hoverColor : bgColor }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={clickAction}>
      <IconName size={20} color={"#000000"}></IconName>
      <label className="text-black text-center font-medium">{action}</label>
    </button>
  );
}

export default ActionButton;