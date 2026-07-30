const styles = {
    badgeExpired: "block w-full text-center rounded px-2 py-1 bg-danger text-background font-semibold",
    badgeValid: "block w-full text-center rounded px-2 py-1 bg-good text-background font-semibold",
}

interface ExpirationDateBadgeProps {
    expirationDate: string;
}

function ExpirationDateBadge({ expirationDate }: ExpirationDateBadgeProps) {
    const isExpired = new Date(expirationDate) < new Date();
    return (
        <span className={isExpired ? styles.badgeExpired : styles.badgeValid}>
            {expirationDate}
        </span>
    );
}

export default ExpirationDateBadge;