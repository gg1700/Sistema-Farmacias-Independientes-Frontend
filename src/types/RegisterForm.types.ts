import { ActionButtonProps } from "./ActionButton.types";
import { DropDownProps } from "./Dropdown.types";
import { TextFieldProps } from "./TextField.types";
import { TextAreaProps } from "./TextArea.types";

export interface InputElement{
  id: number;
  inputType: string;
  dropDownProps?: DropDownProps;
  textFieldProps?: TextFieldProps;
  textAreaProps?: TextAreaProps;
}

export interface RegisterFormProps{
  subtitle: string;
  inputs: InputElement[];
  actionButtonProps: ActionButtonProps;
  className: string;
  onAddSubcategory?: () => void;
  formRef?: React.RefObject<HTMLFormElement | null>;
}