import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {format} from 'date-fns'
import useRoomUnitStore from "../../stores/useRoomUnitStore.js";
import useAncillariesStore from "../../stores/useAncillariesStore.js";
import useQuoteRequestStore from "../../stores/useQuoteRequestStore.js";
import useSolutionStore from "../../stores/useSolutionStore.js";
import useAncillariesFormStore from "../../stores/useAncillariesFormStore.js";
import {useRoomUnit} from "../../hooks/useRoomUnit.js";
import {useAncillaries} from "../../hooks/useAncillaries.js";
import AncillaryItem from "./partials/AncillaryItem.jsx";
import MasterGuestForm from "./partials/MasterGuestForm.jsx";
import AddressForm from "./partials/AddressForm.jsx";
import DocumentForm from "./partials/DocumentForm.jsx";
import GuestsFormItem from "./partials/GuestsFormItem.jsx";
import './bookingFormContainer.css'
import useMasterGuestFormStore from "../../stores/useMasterGuestFormStore.js";

const BookingFormContainer = () => {
    const {solutionId, policyCode} = useParams()
    const {solution} = useSolutionStore()
    const {quoteRequest} = useQuoteRequestStore()
    const {roomUnit, roomUnitLoading, roomUnitError, roomUnitReset} = useRoomUnitStore()
    const {ancillaries, ancillariesLoading, ancillariesError} = useAncillariesStore()
    const {checkRoomAvailability} = useRoomUnit()
    const {getAncillaries} = useAncillaries()
    const {ancillariesIds, ancillariesPrice} = useAncillariesFormStore()
    const { firstName, lastName, gender, dateOfBirth, email, phone } = useMasterGuestFormStore()

    useEffect(() => {
        checkRoomAvailability(solutionId, policyCode)
        getAncillaries()
    }, []);

    useEffect(() => {
        return () => roomUnitReset
    }, [roomUnitReset])

    if (!solution) return
    if (!roomUnit) return
    if (!ancillaries) return
    if (!quoteRequest) return

    const {checkIn, checkOut, daysStay, adults, children, hasInfant} = quoteRequest
    const occupancy = hasInfant ? adults + children + 1 : adults + children
    const policy = solution.policies.find(policy => policy.bookingPolicyId.code === policyCode)

    const onBookingFormSubmit = (e) => {
        e.preventDefault()

        const masterGuest = {
            firstName,
            lastName,
            gender,
            dateOfBirth,
            email,
            phone
        }

        const payload = {
            quoteSolutionId: solutionId,
            roomUnitId: roomUnit.roomUnitId,
            ancillariesData: ancillariesIds,
            masterGuestData: masterGuest
        }

        console.log('booking payload: ', payload)
    }

    return (
        <>
            <div className="container my-4 booking-form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="ancillaries-container">
                        <h3>Personalizza la tua vacanza</h3>
                        {
                            ancillaries.map((ancillary, index) => (
                                <AncillaryItem
                                    key={`ancillary-item-${index}`}
                                    ancillary={ancillary}
                                />
                            ))
                        }
                    </div>
                    <div className="master-guest-container py-3">
                        <h3>Intestatario</h3>
                        <MasterGuestForm/>
                    </div>
                    <div className="address-container py-3">
                        <h3>Indirizzo</h3>
                        <AddressForm/>
                    </div>
                    <div className="document-container py-3">
                        <h3>Documento</h3>
                        <DocumentForm/>
                    </div>
                    <div className="guests-container py-3">
                        <h3>Ospiti</h3>
                        {
                            Array.from({length: occupancy}).map((guest, index) => (
                                <GuestsFormItem
                                    key={`guest-form-item-${index}`}
                                />
                            ))
                        }
                    </div>
                    <div className="review-container-py-3">
                        <h3>Riepilogo</h3>
                        <div className="row py-2">
                            <div className="col col-12 col-md-8">
                                <p className="review-booking-description">
                                    Stai confermando una prenotazione
                                    dal {format(checkIn, 'dd/MM/yyyy')} al {format(checkOut, 'dd/MM/yyyy')} per {adults + children} ospiti {hasInfant ? 'e un neonato' : ''}.<br/>
                                    La camera scelta è una {solution.roomTypeId.name} in {policy.bookingPolicyId.name}
                                </p>
                            </div>
                            <div className="col col-12 col-md-4">
                                <div className="d-flex justify-content-end align-items-center gap-4">
                                    <p className="review-text">{solution.roomTypeId.name}</p>
                                    <p className="review-price">€ {Number(policy.price).toFixed(2)}</p>
                                </div>
                                <div className="d-flex justify-content-end align-items-center gap-4">
                                    <p className="review-text">Servizi Extra</p>
                                    <p className="review-price">€ {ancillariesPrice.toFixed(2)}</p>
                                </div>
                                <div className="d-flex justify-content-end align-items-center gap-4">
                                    <p className="review-text">Totale Soggiorno</p>
                                    <p className="review-price"><b>€ {(policy.price + ancillariesPrice).toFixed(2)}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-3">
                        <button
                            onClick={onBookingFormSubmit}
                            className="py-2 px-4 rounded rounded-2 book-now-btn"
                        >
                            INVIA
                        </button>
                        <button className="btn py-2 px-4 rounded rounded-2 btn-light">Pulisci</button>
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