import useRoomsStore from "../../../stores/backoffice/useRoomsStore.js";
import {useRooms} from "../../../hooks/backoffice/useRooms.js";
import DefaultTable from "../defaultTable/DefaultTable.jsx";

const RoomsContainer = () => {
    const {
        rooms, roomsLoading, roomsError,
        page, pageSize,
        setPage, setPageSize, totalResults
    } = useRoomsStore()
    const { getAllRooms } = useRooms()

    const columns = [
        { field: "_id", header: "ID" },
        { field: "name", header: "Nome" },
        { field: "type", header: "Tipologia" },
        { field: "category", header: "Categoria" },
        { field: "maxOccupancy", header: "Occupazione" },
        { field: "hasCrib", header: "Culla", body: row => row.hasCrib ? "Si" : "No" }
    ]

    return (
        <>
            <section className="rooms-section">
                <div className="container p-2 my-4 rooms-container">
                    <h2 className="mb-4">Camere</h2>
                    <DefaultTable
                        value={rooms}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllRooms}
                        columns={columns}
                        showActions={true}
                    />
                </div>
            </section>
        </>
    );
};

export default RoomsContainer;