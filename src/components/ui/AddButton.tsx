import { RiAddLine } from 'react-icons/ri';
import ActionButton from '../ui/ActionButton';

interface AddButtonProps {
    label?: string;
    onClick?: () => void;
}

function AddButton({ label = "Añadir", onClick }: AddButtonProps) {
    return (
        <ActionButton
            bgColor="#E0DAB2"
            hoverColor="#82d9b6"
            IconName={RiAddLine}
            action={label}
            clickAction={onClick}
        />
    );
}

export default AddButton;