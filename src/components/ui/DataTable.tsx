import type { ReactNode } from 'react';

const styles = {
    tableWrapper: "overflow-y-auto max-h-96",
    table: "w-full text-center border-collapse",
    headerRow: "text-text text-base",
    headerCell: "py-4 px-3 font-bold border-b border-fields/30",
    bodyRow: "border-t border-fields/20",
    bodyCell: "py-4 px-3 text-text",
    emptyMessage: "text-center text-fields py-6",
}

export interface DataTableColumn<TRow> {
    header: string;
    render: (row: TRow) => ReactNode;
}

interface DataTableProps<TRow> {
    columns: DataTableColumn<TRow>[];
    rows: TRow[];
    getRowKey: (row: TRow) => string | number;
    emptyMessage?: string;
}

function DataTable<TRow>({ columns, rows, getRowKey, emptyMessage = "No hay registros para mostrar" }: DataTableProps<TRow>) {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        {columns.map((column) => (
                            <th key={column.header} className={styles.headerCell}>
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={getRowKey(row)} className={styles.bodyRow}>
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

export default DataTable;