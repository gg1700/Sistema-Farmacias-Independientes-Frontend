import { FaSave } from 'react-icons/fa';

const styles = {
    button: "flex items-center gap-2 bg-modals text-text border border-fields/30 px-6 py-2 rounded-md font-semibold",
}

interface SaveButtonProps {
    label?: string;
    onClick?: () => void;
}

function SaveButton({ label = "Guardar", onClick }: SaveButtonProps) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            <FaSave size={16} />
            {label}
        </button>
    );
}

export default SaveButton;