import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import useQuoteRequestsStore from "../../../stores/backoffice/useQuoteRequestsStore.js";
import {useQuoteRequests} from "../../../hooks/backoffice/useQuoteRequests.js";
import {useEffect} from "react";
import {format} from "date-fns";
import './quoteRequestContainer.css'

const QuoteRequestContainer = () => {
    const {
        quoteRequests, quoteRequestsLoading, quoteRequestsError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useQuoteRequestsStore()
    const { getAllQuoteRequests } = useQuoteRequests()

    const onPaginationChange = (e) => {
        if (e.rows !== pageSize) setPageSize(e.rows)
        if (e.page !== page) setPage(e.page)
    }

    useEffect(() => {
        getAllQuoteRequests(page, pageSize)
    }, [page, pageSize]);

    return (
        <>
            <section className="quote-requests-section">
                <div className="container p-2 my-4 quote-request-container">
                    <h2 className="mb-4">Richieste di Preventivo</h2>
                    <DataTable
                        value={quoteRequests}
                        paginator
                        lazy
                        rows={pageSize}
                        totalRecords={totalResults}
                        first={page * pageSize}
                        onPage={onPaginationChange}
                        rowsPerPageOptions={[10, 15, 20]}
                        loading={quoteRequestsLoading}
                    >
                        <Column field="_id" header="ID"></Column>
                        <Column field="checkIn" header="Arrivo" body={(row) => format(row.checkIn, 'dd/MM/yyyy')}></Column>
                        <Column field="checkOut" header="Partenza" body={(row) => format(row.checkOut, 'dd/MM/yyyy')}></Column>
                        <Column field="daysStay" header="Notti" bodyClassName="text-center"></Column>
                        <Column field="adults" header="Adulti"></Column>
                        <Column field="children" header="Bambini"></Column>
                        <Column field="hasInfant" header="Infant" body={(row) => row.hasInfant ? 1 : 0} ></Column>
                        <Column field="createdAt" header="Creato" body={(row) => format(row.createdAt, 'dd/MM/yyyy')} ></Column>
                    </DataTable>
                </div>
            </section>
        </>
    );
};

export default QuoteRequestContainer;