import { TextAreaProps } from "../../types/TextArea.types";

function TextArea({ label, cols, rows, placeholder }: TextAreaProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <label className="text-black text-left text-lg font-medium pt-2">{label}</label>
      <textarea id={`${label}-input`} cols={cols} rows={rows} placeholder={placeholder}
       className="bg-secondary resize-none border border-black rounded-xl px-2 py-2">
      </textarea>
    </div>
  );
}

export default TextArea;