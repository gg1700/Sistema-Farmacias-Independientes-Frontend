import React from "react";

export interface ActionButtonProps{
  bgColor: string;
  hoverColor: string;
  IconName: React.ElementType;
  action: string;
  clickAction?: () => void;
}