import useGuestsFormStore from "../../../../stores/website/useGuestsFormStore.js";

const GuestsFormItem = ({ index }) => {
    const { guests, updateGuestField } = useGuestsFormStore()
    const guest = guests[index] || {}

    const firstNameChange = (e) => {
        updateGuestField(index, 'firstName', e.target.value)
    }

    const lastNameChange = (e) => {
        updateGuestField(index, 'lastName', e.target.value)
    }

    const genderChange = (e) => {
        updateGuestField(index, 'gender', e.target.value)
    }

    const dateOfBirthChange = (e) => {
        updateGuestField(index, 'dateOfBirth', e.target.value)
    }

    return (
        <>
            <div className="row align-items-center guest-item py-2">
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor={`guest-first-name-${index}`}>Nome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name={`guest-first-name-${index}`}
                            id={`guest-first-name-${index}`}
                            placeholder="Il tuo Nome"
                            value={guest.firstName}
                            onChange={firstNameChange}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor={`guest-last-name-${index}`}>Cognome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name={`guest-last-name-${index}`}
                            id={`guest-last-name-${index}`}
                            placeholder="Il tuo Cognome"
                            value={guest.lastName}
                            onChange={lastNameChange}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor={`guest-gender-${index}`}>Sesso</label>
                        <select
                            className="py-1 px-2 booking-form-input"
                            name={`guest-gender-${index}`}
                            id={`guest-gender-${index}`}
                            value={guest.gender}
                            onChange={genderChange}
                        >
                            <option value="">Sesso</option>
                            <option value="male">Uomo</option>
                            <option value="female">Donna</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor={`guest-date-of-birth-${index}`}>Data di nascita</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="date"
                            name={`guest-date-of-birth-${index}`}
                            id={`guest-date-of-birth-${index}`}
                            value={guest.dateOfBirth}
                            onChange={dateOfBirthChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuestsFormItem;