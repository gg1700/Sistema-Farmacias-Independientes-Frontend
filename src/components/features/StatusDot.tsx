const styles = {
    dotActive: "inline-block w-3 h-3 rounded-full bg-good ml-3",
    dotInactive: "inline-block w-3 h-3 rounded-full bg-danger ml-3",
}

interface StatusDotProps {
    isActive: boolean;
}

function StatusDot({ isActive }: StatusDotProps) {
    return <span className={isActive ? styles.dotActive : styles.dotInactive} />;
}

export default StatusDot;