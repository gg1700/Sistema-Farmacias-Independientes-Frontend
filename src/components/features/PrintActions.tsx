import { useNavigate } from 'react-router-dom';
import { FaUndo, FaPrint } from 'react-icons/fa';
import ActionButton from '../ui/ActionButton';

const styles = {
    container: "flex justify-center gap-4 mt-4 no-print",
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
            <ActionButton
                bgColor="#E0DAB2"
                hoverColor="#82d9b6"
                IconName={FaUndo}
                action="Volver"
                clickAction={handleBack}
            />
            <ActionButton
                bgColor="#E0DAB2"
                hoverColor="#82d9b6"
                IconName={FaPrint}
                action="Imprimir"
                clickAction={handlePrint}
            />
        </div>
    );
}

export default PrintActions;