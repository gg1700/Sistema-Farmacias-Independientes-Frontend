import type { ReactNode } from 'react';

const styles = {
    scrollWrapper: "print-scroll-area overflow-y-auto overflow-x-hidden pr-1",
    table: "w-full border-collapse",
    headerCell: "border border-black text-center font-semibold text-sm py-2 px-2 sticky top-0 bg-background",
    bodyCell: "border border-black text-center text-sm py-2 px-2 h-12",
    emptyMessage: "text-center text-fields py-6",
}

const VISIBLE_ROWS = 4;
const ROW_HEIGHT_PX = 48;
const HEADER_HEIGHT_PX = 40;

export interface PrintTableColumn<TRow> {
    header: string;
    render: (row: TRow) => ReactNode;
}

interface PrintTableProps<TRow> {
    columns: PrintTableColumn<TRow>[];
    rows: TRow[];
    getRowKey: (row: TRow) => string | number;
    emptyMessage?: string;
}

function PrintTable<TRow>({ columns, rows, getRowKey, emptyMessage = "No hay registros para mostrar" }: PrintTableProps<TRow>) {
    const maxHeight = HEADER_HEIGHT_PX + VISIBLE_ROWS * ROW_HEIGHT_PX;

    return (
        <div className={styles.scrollWrapper} style={{ maxHeight: `${maxHeight}px` }}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.header} className={styles.headerCell}>
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={getRowKey(row)}>
                            {columns.map((column) => (
                                <td key={column.header} className={styles.bodyCell}>
                                    {column.render(row)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {rows.length === 0 && <p className={styles.emptyMessage}>{emptyMessage}</p>}
        </div>
    );
}

export default PrintTable;