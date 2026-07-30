const styles = {
    fieldContainer: "flex items-center gap-2",
    label: "text-text font-semibold",
    select: "border border-fields/40 rounded px-3 py-1 bg-background text-text",
}

interface SelectFilterFieldProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}

function SelectFilterField({ label, value, options, onChange }: SelectFilterFieldProps) {
    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label}>{label}</label>
            <select value={value} onChange={(event) => onChange(event.target.value)} className={styles.select}>
                <option value="">Todos</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectFilterField;