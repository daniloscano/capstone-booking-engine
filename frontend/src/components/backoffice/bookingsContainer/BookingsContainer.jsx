import useBookingsStore from "../../../stores/backoffice/useBookingsStore.js";
import {useBookings} from "../../../hooks/backoffice/useBookings.js";
import DefaultTable from "../defaultTable/DefaultTable.jsx";
import {format} from "date-fns";

const BookingsContainer = () => {
    const {
        bookings, bookingsLoading, bookingsError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useBookingsStore()
    const { getAllBookings } = useBookings()

    const columns = [
        { field: "_id", header: "Codice" },
        { header: "Intestatario", body: row => `${row.masterGuestId.lastName} ${row.masterGuestId.firstName}` },
        { field: "roomId.roomTypeId.name", header: "Camera" },
        { field: "roomId.number", header: "Num" },
        { field: "checkIn", header: "Arrivo", body: row => format(row.checkIn, 'dd/MM/yyyy') },
        { field: "checkOut", header: "Partenza", body: row => format(row.checkOut, 'dd/MM/yyyy') },
        { field: "adults", header: "Adulti" },
        { field: "children", header: "Bambini" },
        { field: "hasInfant", header: "Infant", body: row => row.hasInfant ? 1 : 0 },
        { field: "policyId.code", header: "Tariffa" },
        { header: "Importo", body: row => `€ ${row.totalPrice.toFixed(2)}` },
        { field: "createdAt", header: "Creato", body: row => format(row.createdAt, 'dd/MM/yyyy') },
    ]

    return (
        <>
            <section className="bookings-section">
                <div className="container-fluid p-4 my-4 bookings-container">
                    <h2 className="mb-4">Prenotazioni</h2>
                    <DefaultTable
                        value={bookings}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllBookings}
                        columns={columns}
                    />
                </div>
            </section>
        </>
    );
};

export default BookingsContainer;