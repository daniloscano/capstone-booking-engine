import {useEffect} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import './defaultTable.css'

const DefaultTable = ({ value, page, pageSize, setPage, setPageSize, totalValues, onFetch, columns }) => {
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
                        <Column key={`column-${index}`} { ...column } />
                    ))
                }
            </DataTable>
        </>
    );
};

export default DefaultTable;