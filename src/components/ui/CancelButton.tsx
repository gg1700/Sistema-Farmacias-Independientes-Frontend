import { FaTimes } from 'react-icons/fa';

const styles = {
    button: "flex items-center gap-2 bg-modals text-text border border-fields/30 px-6 py-2 rounded-md font-semibold",
}

interface CancelButtonProps {
    label?: string;
    onClick?: () => void;
}

function CancelButton({ label = "Cancelar", onClick }: CancelButtonProps) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            <FaTimes size={16} />
            {label}
        </button>
    );
}

export default CancelButton;