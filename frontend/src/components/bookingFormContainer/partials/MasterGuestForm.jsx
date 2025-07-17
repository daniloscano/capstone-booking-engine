import React from 'react';
import useMasterGuestFormStore from "../../../stores/useMasterGuestFormStore.js";

const MasterGuestForm = () => {
    const {
        firstName, setFirstName,
        lastName, setLastName,
        gender, setGender,
        dateOfBirth, setDateOfBirth,
        email, setEmail,
        phone, setPhone
    } = useMasterGuestFormStore()

    const firstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const genderChange = (e) => {
        setGender(e.target.value)
    }

    const dateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const phoneChange = (e) => {
        setPhone(e.target.value)
    }

    return (
        <>
            <div className="row align-items-center py-2">
                <div className="col col-12 col-md-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="master-first-name">Nome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="master-first-name"
                            id="master-first-name"
                            placeholder="Il tuo Nome"
                            onChange={firstNameChange}
                            value={firstName}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="master-last-name">Cognome</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="text"
                            name="master-last-name"
                            id="master-last-name"
                            placeholder="Il tuo Cognome"
                            value={lastName}
                            onChange={lastNameChange}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="master-gender">Sesso</label>
                        <select
                            className="py-1 px-2 booking-form-input"
                            name="master-gender"
                            id="master-gender"
                            value={gender}
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
                        <label htmlFor="master-date-of-birth">Data di nascita</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="date"
                            name="master-date-of-birth"
                            id="master-date-of-birth"
                            value={dateOfBirth}
                            onChange={dateOfBirthChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row align-items-center py-2">
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="master-email">Email</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="email"
                            name="master-email"
                            id="master-email"
                            placeholder="La tua Email"
                            value={email}
                            onChange={emailChange}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="master-email">Telefono</label>
                        <input
                            className="py-1 px-2 booking-form-input"
                            type="phone"
                            name="master-phone"
                            id="master-phone"
                            placeholder="Il tuo Telefono"
                            value={phone}
                            onChange={phoneChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MasterGuestForm;