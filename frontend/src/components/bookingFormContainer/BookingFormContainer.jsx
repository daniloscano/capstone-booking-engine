import {useParams} from "react-router-dom";
import {useRoomUnit} from "../../hooks/useRoomUnit.js";
import {useEffect} from "react";
import useRoomUnitStore from "../../stores/useRoomUnitStore.js";
import useAncillariesStore from "../../stores/useAncillariesStore.js";
import {useAncillaries} from "../../hooks/useAncillaries.js";
import './bookingFormContainer.css'

const BookingFormContainer = () => {
    const {solutionId, policyCode} = useParams()
    const {roomUnit, roomUnitLoading, roomUnitError, roomUnitReset} = useRoomUnitStore()
    const {ancillaries, ancillariesLoading, ancillariesError} = useAncillariesStore()
    const {checkRoomAvailability} = useRoomUnit()
    const {getAncillaries} = useAncillaries()

    useEffect(() => {
        checkRoomAvailability(solutionId, policyCode)
        getAncillaries()
    }, []);

    useEffect(() => {
        return () => roomUnitReset
    }, [roomUnitReset])

    if (!roomUnit) return

    if (!ancillaries) return

    return (
        <>
            <div className="container my-4 booking-form-container">
                <form>
                    <div className="ancillaries-container">
                        <h3>Personalizza la tua vacanza</h3>
                        {
                            ancillaries.map((ancillary, index) => (
                                <div
                                    key={`ancillary-${index}`}
                                    className="row align-items-center p-2 my-4 rounded rounded-2 ancillary-item"
                                >
                                    <div className="col col-12 col-md-10">
                                        <h4 className="p-0 my-1">{ancillary.name}</h4>
                                        <p className="p-0 my-1">{ancillary.description}</p>
                                        <p className="m-0 p-0">
                                            <b>€ {Number(ancillary.price).toFixed(2)}</b>
                                            {
                                                (() => {
                                                    switch (ancillary.allocation) {
                                                        case 'perNight':
                                                            return ' - al giorno'
                                                        case 'perOccupancy':
                                                            return ' - a persona al giorno'
                                                        default:
                                                            return ' - prezzo fisso'
                                                    }
                                                })()
                                            }
                                        </p>
                                    </div>
                                    <div className="col col-12 col-md-2">
                                        <div className="d-flex flex-column align-items-center">
                                            <button className="py-2 px-4 rounded rounded-2 book-now-btn">SCEGLI</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="master-guest-container py-3">
                        <h4>Intestatario</h4>
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="address-container py-3">
                        <h4>Indirizzo</h4>
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
                    </div>
                    <div className="document-container py-3">
                        <h4>Documento</h4>
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
                        <div className="guests-container py-4">
                            <h4>Ospiti</h4>
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
                        </div>
                    </div>
                </form>
            </div>
            {
                !roomUnitLoading && !roomUnit.available && (
                    <>
                        <div className="container my-4 text-center">
                            <h2>La camera scelta non è più disponibile</h2>
                            <p>Ti preghiamo di selezionare una nuova camera per il tuo soggiorno</p>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default BookingFormContainer;