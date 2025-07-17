const DocumentForm = () => {
    return (
        <>
            <div className="row align-items-center py-2">
                <div className="col col-12 col-md-5">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="document-type">Documento</label>
                        <select
                            className="py-1 px-2 booking-form-input"
                            name="document-type"
                            id="document-type"
                        >
                            <option value="">Documento</option>
                            <option value="idCard">Carta di Identità</option>
                            <option value="drivingLicense">Patente di Guida</option>
                            <option value="passport">Passaporto</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="document-number">Numero</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="document-number"
                            id="document-number"
                            placeholder="Il Numero del Documento"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="document-expire-date">Data di Scadenza</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="date"
                            name="document-expire-date"
                            id="document-expire-date"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocumentForm;