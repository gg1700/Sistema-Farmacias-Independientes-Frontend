import { FaClinicMedical } from 'react-icons/fa';

const styles = {
    container: "grid grid-cols-3 items-start border-b border-black pb-3 mb-3",
    leftBlock: "flex flex-col items-start gap-1",
    logoCircle: "flex items-center justify-center w-14 h-14 rounded-full border border-primary text-primary",
    responsibleText: "text-text text-sm font-semibold",
    centerBlock: "flex flex-col items-center justify-center gap-1",
    title: "text-black text-center font-medium text-xl",
    dateRange: "text-text text-sm text-center",
    rightBlock: "flex flex-col items-end text-text text-sm gap-1",
}

const RESPONSIBLE_NAME = "Magda Nancy Vidal";

interface PrintHeaderProps {
    title: string;
    startDate: string;
    endDate: string;
}

function PrintHeader({ title, startDate, endDate }: PrintHeaderProps) {
    const today = new Date().toLocaleDateString('es-ES');

    function getDateRangeText(): string | null {
        if (startDate && endDate) {
            return `De ${startDate} a ${endDate}`;
        }
        if (startDate && !endDate) {
            return `De ${startDate} a ${today}`;
        }
        return null;
    }

    const dateRangeText = getDateRangeText();

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.logoCircle}>
                    <FaClinicMedical size={28} />
                </div>
                <span className={styles.responsibleText}>Responsable: {RESPONSIBLE_NAME}</span>
            </div>

            <div className={styles.centerBlock}>
                <span className={styles.title}>{title}</span>
                {dateRangeText && <span className={styles.dateRange}>{dateRangeText}</span>}
            </div>

            <div className={styles.rightBlock}>
                <span>Pagina 1</span>
                <span>Fecha: {today}</span>
            </div>
        </div>
    );
}

export default PrintHeader;