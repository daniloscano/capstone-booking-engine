import useServicesStore from "../../../stores/backoffice/useServicesStore.js";
import {useServices} from "../../../hooks/backoffice/useServices.js";
import {format} from "date-fns";
import DefaultTable from "../defaultTable/DefaultTable.jsx";

const ServicesContainer = () => {
    const {
        services, servicesLoading, servicesError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useServicesStore()
    const {getAllServices} = useServices()

    const columns = [
        {field: "_id", header: "Codice"},
        {field: "name", header: "Nome"},
        {field: "description", header: "Descrizione"},
        {header: "Importo", body: row => `€ ${row.price.toFixed(2)}`},
        {
            header: "Ripartizione", body: row => {
                switch (row.allocation) {
                    case 'perNight':
                        return 'a Notte'
                    case 'perOccupancy':
                        return 'a Persona'
                    default:
                        return 'prezzo fisso'
                }
            }
        }
    ]

    return (
        <>
            <section className="services-section">
                <div className="container-fluid p-4 my-4 services-container">
                    <h2 className="mb-4">Servizi</h2>
                    <DefaultTable
                        value={services}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllServices}
                        columns={columns}
                        showActions={true}
                    />
                </div>
            </section>
        </>
    );
};

export default ServicesContainer;