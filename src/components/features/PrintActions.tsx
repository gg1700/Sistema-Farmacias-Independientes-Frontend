import { useNavigate } from 'react-router-dom';
import { FaUndo, FaPrint } from 'react-icons/fa';

const styles = {
    container: "flex justify-center gap-4 mt-4 no-print",
    backButton: "flex items-center gap-2 bg-modals border border-fields/30 rounded-md px-6 py-2 font-semibold text-text",
    printButton: "flex items-center gap-2 bg-modals border border-fields/30 rounded-md px-6 py-2 font-semibold text-text",
}

interface PrintActionsProps {
    backTo: string;
}

function PrintActions({ backTo }: PrintActionsProps) {
    const navigate = useNavigate();

    function handleBack() {
        navigate(backTo);
    }

    function handlePrint() {
        window.print();
    }

    return (
        <div className={styles.container}>
            <button type="button" onClick={handleBack} className={styles.backButton}>
                <FaUndo size={16} />
                Volver
            </button>
            <button type="button" onClick={handlePrint} className={styles.printButton}>
                <FaPrint size={16} />
                Imprimir
            </button>
        </div>
    );
}

export default PrintActions;