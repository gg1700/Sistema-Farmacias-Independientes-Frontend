import { FaPrint } from 'react-icons/fa';
import ActionButton from '../ui/ActionButton';

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
        <div className="mr-20 inline-block">
            <ActionButton
                bgColor="#E0DAB2"
                hoverColor="#82d9b6"
                IconName={FaPrint}
                action="Impresion"
                clickAction={handlePrint}
            />
        </div>
    );
}

export default PrintButton;