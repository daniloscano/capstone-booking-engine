import useRatesStore from "../../../stores/backoffice/useRatesStore.js";
import {useRates} from "../../../hooks/backoffice/useRates.js";
import DefaultTable from "../defaultTable/DefaultTable.jsx";
import {format} from "date-fns";

const RatesContainer = () => {
    const {
        rates, ratesLoading, ratesError,
        page, pageSize,
        setPage, setPageSize,
        totalResults
    } = useRatesStore()
    const { getAllRates } = useRates()

    const columns = [
        { field: "_id", header: "Codice" },
        { field: "roomTypeId.name", header: "Camera" },
        { field: "roomTypeId.type", header: "Tipologia" },
        { field: "roomTypeId.category", header: "Categoria" },
        { field: "date", header: "Data", body: row => format(row.date, 'dd/MM/yyyy') },
        { header: "Importo", body: row => `€ ${row.price.toFixed(2)}`},
        { header: "Adulto Extra", body: row => `${row.extraAdultMultiplier * 100} %` },
        { header: "Bambino Extra", body: row => `${row.extraChildMultiplier * 100} %` },
    ]

    return (
        <>
            <section className="rates-section">
                <div className="container-fluid p-4 my-4 rates-container">
                    <h2 className="mb-4">Listini</h2>
                    <DefaultTable
                        value={rates}
                        page={page}
                        pageSize={pageSize}
                        setPage={setPage}
                        setPageSize={setPageSize}
                        totalValues={totalResults}
                        onFetch={getAllRates}
                        columns={columns}
                        showActions={true}
                    />
                </div>
            </section>
        </>
    );
};

export default RatesContainer;