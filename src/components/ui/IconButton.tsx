import type { ReactNode } from 'react';

const styles = {
    button: "flex items-center justify-center w-9 h-9 rounded-full bg-background text-text hover:opacity-70 transition-opacity shadow-sm",
}

interface IconButtonProps {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
}

function IconButton({ icon, label, onClick }: IconButtonProps) {
    return (
        <button type="button" title={label} aria-label={label} onClick={onClick} className={styles.button}>
            {icon}
        </button>
    );
}

export default IconButton;