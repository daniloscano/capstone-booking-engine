import useAddressFormStore from "../../../stores/useAddressFormStore.js";

const AddressForm = () => {
    const {
        street, setStreet,
        zipCode, setZipCode,
        city, setCity,
        region, setRegion,
        nation, setNation
    } = useAddressFormStore()

    const streetChange = (e) => {
        setStreet(e.target.value)
    }

    const zipCodeChange = (e) => {
        setZipCode(e.target.value)
    }

    const cityChange = (e) => {
        setCity(e.target.value)
    }

    const regionChange = (e) => {
        setRegion(e.target.value)
    }

    const nationChange = (e) => {
        setNation(e.target.value)
    }

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
                            value={street}
                            onChange={streetChange}
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
                            value={zipCode}
                            onChange={zipCodeChange}
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
                            value={city}
                            onChange={cityChange}
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
                            value={region}
                            onChange={regionChange}
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
                            value={nation}
                            onChange={nationChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressForm;