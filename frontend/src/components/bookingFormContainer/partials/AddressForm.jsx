const AddressForm = () => {
    return (
        <>
            <div className="row align-items-center py-2">
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="address-street">Indirizzo</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="address-street"
                            id="address-street"
                            placeholder="Il tuo Indirizzo"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="address-zipcode">CAP</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="address-zipcode"
                            id="address-zipcode"
                            placeholder="Il tuo CAP"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="address-city">Città</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="address-city"
                            id="address-city"
                            placeholder="La tua Città"
                        />
                    </div>
                </div>
            </div>
            <div className="row align-items-center py-2">
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="address-region">Provincia</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="address-region"
                            id="address-region"
                            placeholder="La tua Provincia"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="address-nation">Nazione</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="address-nation"
                            id="address-nation"
                            placeholder="La tua Nazione"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressForm;