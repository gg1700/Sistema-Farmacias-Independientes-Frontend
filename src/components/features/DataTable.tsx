import type { ReactNode } from 'react';

const styles = {
    section: "flex flex-col justify-center items-center p-1 w-full",
    title: "text-black text-center font-medium text-2xl p-3",
    cardWrapper: "w-full flex justify-center overflow-x-auto",
    card: "bg-modals grid w-full max-w-5xl rounded-2xl shadow-sm max-h-[420px] overflow-y-auto",
    headerRow: "grid gap-2 text-center items-center p-2 border-b-2 border-[#ADA87F] sticky top-0 bg-modals",
    headerCell: "text-black text-center font-semibold",
    bodyRow: "grid gap-2 text-center items-center p-4 min-h-16",
    bodyCell: "text-black text-center text-sm font-medium line-clamp-2",
    fillerCell: "text-black text-center text-sm p-5 font-medium truncate",
    emptyMessage: "text-center text-fields py-10 col-span-full",
    footerWrapper: "flex justify-center p-3",
}

export interface DataTableColumn<TRow> {
    header: string;
    render: (row: TRow) => ReactNode;
}

interface DataTableProps<TRow> {
    title?: string;
    columns: DataTableColumn<TRow>[];
    rows: TRow[];
    getRowKey: (row: TRow) => string | number;
    itemsPerPage?: number;
    emptyMessage?: string;
    footer?: ReactNode;
}

function DataTable<TRow>({
    title,
    columns,
    rows,
    getRowKey,
    itemsPerPage,
    emptyMessage = "No hay registros para mostrar",
    footer,
}: DataTableProps<TRow>) {
    const gridTemplateColumns = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` };
    const remainingRows = itemsPerPage && rows.length > 0 ? Math.max(itemsPerPage - rows.length, 0) : 0;

    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.cardWrapper}>
                <div className={styles.card} lang="es">
                    <ul className={styles.headerRow} style={gridTemplateColumns}>
                        {columns.map((column) => (
                            <li key={column.header} className={styles.headerCell}>
                                {column.header}
                            </li>
                        ))}
                    </ul>

                    {rows.map((row) => (
                        <ul key={getRowKey(row)} className={styles.bodyRow} style={gridTemplateColumns}>
                            {columns.map((column) => (
                                <li key={column.header} className={styles.bodyCell}>
                                    {column.render(row)}
                                </li>
                            ))}
                        </ul>
                    ))}

                    {remainingRows > 0 &&
                        Array.from({ length: remainingRows }, (_, rowIndex) => (
                            <ul key={`filler-row-${rowIndex}`} className={styles.bodyRow} style={gridTemplateColumns}>
                                {columns.map((column, columnIndex) => (
                                    <li key={`filler-cell-${rowIndex}-${columnIndex}`} className={styles.fillerCell}>
                                        {""}
                                    </li>
                                ))}
                            </ul>
                        ))}

                    {rows.length === 0 && (
                        <p className={styles.emptyMessage}>{emptyMessage}</p>
                    )}

                    {footer && (
                        <div className={styles.footerWrapper}>
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default DataTable;