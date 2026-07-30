import { useState } from "react";
import { ActionButtonProps } from "../../types/ActionButton.types";

function ActionButton({ bgColor, hoverColor, IconName, action, clickAction, typeButton, padding, dimentions }: ActionButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <button className={`flex items-center justify-center ${(dimentions) ? dimentions : "h-6 w-44"} gap-2.5
    ${(padding) ? padding : "px-5 py-4 m-2"} rounded-lg border border-black hover:scale-105 hover:cursor-pointer 
    transition-transform whitespace-nowrap`}
    type={(typeButton) ? typeButton as any : "button"}
    style={{ backgroundColor: hover ? hoverColor : bgColor }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={clickAction}>
      <IconName size={20} color={"#000000"} className={"hover:cursor-pointer"}></IconName>
      <label className="text-black text-center font-medium hover:cursor-pointer">{action}</label>
    </button>
  );
}

export default ActionButton;