import { Fragment } from 'react';
import type { PurchaseLineItem } from '../../types/Inventory';

const styles = {
    scrollWrapper: "print-scroll-area overflow-y-auto overflow-x-hidden pr-1",
    table: "w-full border-collapse",
    headerCell: "border border-black text-center font-semibold text-sm py-2 px-2 sticky top-0 bg-background",
    bodyCell: "border border-black text-center text-sm py-2 px-2 h-12",
    totalLabelCell: "border border-black text-right font-semibold text-sm py-2 px-3 h-12",
    totalValueCell: "border border-black text-center font-semibold text-sm py-2 px-2 h-12",
}

const VISIBLE_ROWS = 4;
const ROW_HEIGHT_PX = 48;
const HEADER_HEIGHT_PX = 40;

interface GroupedPurchasesPrintTableProps {
    rows: PurchaseLineItem[];
}

function GroupedPurchasesPrintTable({ rows }: GroupedPurchasesPrintTableProps) {
    const maxHeight = HEADER_HEIGHT_PX + VISIBLE_ROWS * ROW_HEIGHT_PX;

    function calculateSubtotal(item: PurchaseLineItem) {
        return item.quantity * item.unitPrice;
    }

    const purchaseIds = Array.from(new Set(rows.map((item) => item.purchaseId)));

    return (
        <div className={styles.scrollWrapper} style={{ maxHeight: `${maxHeight}px` }}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.headerCell}>No.</th>
                        <th className={styles.headerCell}>Proveedor</th>
                        <th className={styles.headerCell}>Fecha</th>
                        <th className={styles.headerCell}>Producto</th>
                        <th className={styles.headerCell}>Cantidad</th>
                        <th className={styles.headerCell}>Precio Unitario</th>
                        <th className={styles.headerCell}>Fecha de Vencimiento</th>
                        <th className={styles.headerCell}>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {purchaseIds.map((purchaseId) => {
                        const groupItems = rows.filter((item) => item.purchaseId === purchaseId);
                        const groupTotal = groupItems.reduce((sum, item) => sum + calculateSubtotal(item), 0);

                        return (
                            <Fragment key={`group-${purchaseId}`}>
                                {groupItems.map((item, itemIndex) => (
                                    <tr key={item.id}>
                                        <td className={styles.bodyCell}>{itemIndex === 0 ? item.purchaseId : ""}</td>
                                        <td className={styles.bodyCell}>{itemIndex === 0 ? item.supplier : ""}</td>
                                        <td className={styles.bodyCell}>{itemIndex === 0 ? item.date : ""}</td>
                                        <td className={styles.bodyCell}>{item.productName}</td>
                                        <td className={styles.bodyCell}>{item.quantity}</td>
                                        <td className={styles.bodyCell}>${item.unitPrice.toFixed(2)}</td>
                                        <td className={styles.bodyCell}>{item.expirationDate}</td>
                                        <td className={styles.bodyCell}>${calculateSubtotal(item).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className={styles.totalLabelCell} colSpan={7}>Total</td>
                                    <td className={styles.totalValueCell}>${groupTotal.toFixed(2)}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GroupedPurchasesPrintTable;