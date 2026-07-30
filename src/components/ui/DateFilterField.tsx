import { useRef } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const styles = {
    fieldContainer: "flex items-center gap-2",
    label: "text-text font-semibold",
    input: "border border-fields/40 rounded px-3 py-1 bg-background text-text",
}

interface DateFilterFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

function DateFilterField({ label, value, onChange }: DateFilterFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleCalendarClick() {
        inputRef.current?.showPicker?.();
    }

    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label}>{label}</label>
            <input
                ref={inputRef}
                type="date"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={styles.input}
            />
                <FaRegCalendarAlt size={18} />

        </div>
    );
}

export default DateFilterField;