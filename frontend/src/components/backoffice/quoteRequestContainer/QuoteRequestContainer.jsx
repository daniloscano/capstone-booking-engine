import useQuoteRequestsStore from "../../../stores/backoffice/useQuoteRequestsStore.js";
import {useQuoteRequests} from "../../../hooks/backoffice/useQuoteRequests.js";
import {format} from "date-fns";
import DefaultTable from "../defaultTable/DefaultTable.jsx";

const QuoteRequestContainer = () => {
    const {
        quoteRequests, quoteRequestsLoading, quoteRequestsError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useQuoteRequestsStore()
    const { getAllQuoteRequests } = useQuoteRequests()

    const columns = [
        { field: "_id", header: "ID" },
        { field: "checkIn", header: "Arrivo", body: row => format(row.checkIn, 'dd/MM/yyyy') },
        { field: "checkOut", header: "Partenza", body: row => format(row.checkOut, 'dd/MM/yyyy') },
        { field: "daysStay", header: "Notti", bodyClassName: "text-center" },
        { field: "adults", header: "Adulti" },
        { field: "children", header: "Bambini" },
        { field: "hasInfant", header: "Infant", body: row => row.hasInfant ? 1 : 0 },
        { field: "createdAt", header: "Creato", body: row => format(row.createdAt, 'dd/MM/yyyy') },
    ];

    return (
        <>
            <section className="quote-requests-section">
                <div className="container p-2 my-4 quote-request-container">
                    <h2 className="mb-4">Richieste di Preventivo</h2>
                    <DefaultTable
                        value={quoteRequests}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllQuoteRequests}
                        columns={columns}
                    />
                </div>
            </section>
        </>
    );
};

export default QuoteRequestContainer;