import { FaPrint } from 'react-icons/fa';

const styles = {
    button: "flex items-center gap-2 bg-modals border border-fields/30 rounded-md px-6 py-2 font-semibold text-text mr-20",
}

interface PrintButtonProps {
    onClick?: () => void;
}

function PrintButton({ onClick }: PrintButtonProps) {
    function handlePrint() {
        if (onClick) {
            onClick();
        } else {
            window.print();
        }
    }

    return (
        <button type="button" onClick={handlePrint} className={styles.button}>
            <FaPrint size={16} />
            Impresion
        </button>
    );
}

export default PrintButton;