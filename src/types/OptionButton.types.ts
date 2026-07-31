import React from "react"

export interface OptionButtonProps {
  children: React.ReactNode;
  description: string;
  clickAction?: () => void;
}

export interface OptionInterface {
  id: number;
  IconName: React.ElementType;
  description: string;
  path: string;
}