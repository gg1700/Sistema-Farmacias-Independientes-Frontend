const styles = {
    button: "flex items-center gap-2 bg-modals border border-fields/30 rounded-md px-5 py-1.5 font-semibold text-text",
}

interface AddButtonProps {
    label?: string;
    onClick?: () => void;
}

function AddButton({ label = "Añadir", onClick }: AddButtonProps) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            <span>+</span>
            {label}
        </button>
    );
}

export default AddButton;