import {useEffect} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Pencil, Trash} from "lucide-react";
import './defaultTable.css'

const DefaultTable = ({
    value, columns,
    page, pageSize, setPage, setPageSize, totalValues,
    showActions = false,
    onFetch, onEdit, onDelete
}) => {
    const onPaginationChange = (e) => {
        if (e.rows !== pageSize) setPageSize(e.rows)
        if (e.page !== page) setPage(e.page)
    }

    useEffect(() => {
        onFetch(page, pageSize)
    }, [page, pageSize]);

    return (
        <>
            <DataTable
                value={value}
                scrollable
                scrollHeight="600px"
                paginator
                lazy
                rows={pageSize}
                totalRecords={totalValues}
                first={page * pageSize}
                onPage={onPaginationChange}
                rowsPerPageOptions={[10, 20, 30]}
            >
                {
                    columns.map((column, index) => (
                        <Column key={`column-${index}`} {...column} />
                    ))
                }
                {
                    showActions && (
                        <Column
                            header="Azioni"
                            body={(rowData) => (
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <button
                                        onClick={(rowData) => onEdit(rowData._id)}
                                        className="py-1 px-2 rounded rounded-2 edit-btn"
                                    >
                                        <Pencil />
                                    </button>
                                    <button
                                        onClick={(rowData) => onDelete(rowData._id)}
                                        className="py-1 px-2 rounded rounded-2 delete-btn"
                                    >
                                        <Trash />
                                    </button>
                                </div>
                            )}
                        />
                    )
                }
            </DataTable>
        </>
    );
};

export default DefaultTable;