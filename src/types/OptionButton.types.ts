import React from "react"

export interface OptionButtonProps {
  children: React.ReactNode;
  description: string;
}

export interface OptionInterface {
  id: number;
  IconName: React.ElementType;
  description: string;
}