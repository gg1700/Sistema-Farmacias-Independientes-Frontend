import { FaSearch } from 'react-icons/fa';

const styles = {
    fieldContainer: "flex items-center gap-2",
    label: "text-text font-semibold",
    input: "border border-fields/40 rounded px-3 py-1 bg-background text-text",
    searchButton: "text-primary",
}

interface TextFilterFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    onSearch?: () => void;
}

function TextFilterField({ label, value, onChange, onSearch }: TextFilterFieldProps) {
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && onSearch) {
            onSearch();
        }
    }

    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.input}
            />
            {onSearch && (
                <button type="button" onClick={onSearch} aria-label={`Buscar ${label}`} className={styles.searchButton}>
                    <FaSearch size={16} />
                </button>
            )}
        </div>
    );
}

export default TextFilterField;