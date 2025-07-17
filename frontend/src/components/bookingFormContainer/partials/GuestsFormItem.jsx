const GuestsFormItem = () => {
    return (
        <>
            <div className="row align-items-center guest-item py-2">
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="guest-first-name">Nome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="guest-first-name"
                            id="guest-first-name"
                            placeholder="Il tuo Nome"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="guest-last-name">Cognome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="guest-last-name"
                            id="guest-last-name"
                            placeholder="Il tuo Cognome"
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="guest-gender">Sesso</label>
                        <select
                            className="py-1 px-2 booking-form-input"
                            name="guest-gender"
                            id="guest-gender"
                        >
                            <option value="">Sesso</option>
                            <option value="male">Uomo</option>
                            <option value="female">Donna</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="guest-date-of-birth">Data di nascita</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="date"
                            name="guest-date-of-birth"
                            id="guest-date-of-birth"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuestsFormItem;