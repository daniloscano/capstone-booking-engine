import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {format} from 'date-fns'
import useRoomUnitStore from "../../../stores/website/useRoomUnitStore.js";
import useAncillariesStore from "../../../stores/website/useAncillariesStore.js";
import useQuoteRequestStore from "../../../stores/website/useQuoteRequestStore.js";
import useSolutionStore from "../../../stores/website/useSolutionStore.js";
import useAncillariesFormStore from "../../../stores/website/useAncillariesFormStore.js";
import {useRoomUnit} from "../../../hooks/website/useRoomUnit.js";
import {useAncillaries} from "../../../hooks/website/useAncillaries.js";
import {useBooking} from "../../../hooks/website/useBooking.js";
import AncillaryItem from "./partials/AncillaryItem.jsx";
import MasterGuestForm from "./partials/MasterGuestForm.jsx";
import AddressForm from "./partials/AddressForm.jsx";
import DocumentForm from "./partials/DocumentForm.jsx";
import GuestsFormItem from "./partials/GuestsFormItem.jsx";
import './bookingFormContainer.css'
import useMasterGuestFormStore from "../../../stores/website/useMasterGuestFormStore.js";
import useAddressFormStore from "../../../stores/website/useAddressFormStore.js";
import useDocumentFormStore from "../../../stores/website/useDocumentFormStore.js";
import useGuestsFormStore from "../../../stores/website/useGuestsFormStore.js";
import usePaymentFormStore from "../../../stores/website/usePaymentFormStore.js";
import useBookingStore from "../../../stores/website/useBookingStore.js";

const BookingFormContainer = () => {
    const navigate = useNavigate()

    const {solutionId, policyCode} = useParams()
    const {solution} = useSolutionStore()
    const {quoteRequest} = useQuoteRequestStore()
    const {roomUnit, roomUnitLoading, roomUnitReset} = useRoomUnitStore()
    const {ancillaries} = useAncillariesStore()
    const {checkRoomAvailability} = useRoomUnit()
    const {getAncillaries} = useAncillaries()
    const {ancillariesIds, ancillariesPrice} = useAncillariesFormStore()
    const {firstName, lastName, gender, dateOfBirth, email, phone} = useMasterGuestFormStore()
    const {street, zipCode, city, region, nation} = useAddressFormStore()
    const {type, number, expireDate} = useDocumentFormStore()
    const {guests, initializeGuests} = useGuestsFormStore()
    const {
        paymentType, setPaymentType,
        amount, setAmount,
        isCompleted, setIsCompleted,
        completedDate, setCompletedDate
    } = usePaymentFormStore()
    const {createBooking} = useBooking()

    const {checkIn, checkOut, adults, children, hasInfant} = quoteRequest
    const occupancy = hasInfant ? adults + children + 1 : adults + children
    const policy = solution.policies.find(policy => policy.bookingPolicyId.code === policyCode)

    useEffect(() => {
        checkRoomAvailability(solutionId, policyCode)
        getAncillaries()
        initializeGuests(occupancy)
    }, []);

    useEffect(() => {
        return () => roomUnitReset
    }, [roomUnitReset])

    if (!solution) return
    if (!roomUnit) return
    if (!ancillaries) return
    if (!quoteRequest) return

    const createPayment = (e) => {
        const type = policy.bookingPolicyId.code === 'std' ? 'deposit' : 'balance'
        setPaymentType(type)
        setAmount((policy.price + ancillariesPrice).toFixed(2))
        setIsCompleted(true)
        setCompletedDate(new Date())

        e.target.textContent = 'PAGAMENTO COMPLETATO'
    }

    const onBookingFormSubmit = async (e) => {
        e.preventDefault()

        const masterGuest = {
            firstName,
            lastName,
            gender,
            dateOfBirth,
            email,
            phone
        }

        const address = {
            street,
            zipCode,
            city,
            region,
            nation
        }

        const document = {
            type,
            number,
            expireDate
        }

        const payment = {
            type: paymentType,
            amount: Number(amount),
            isCompleted,
            completedDate
        }

        const payload = {
            quoteSolutionId: solutionId,
            roomUnitId: roomUnit.roomUnitId,
            policy,
            ancillariesData: ancillariesIds,
            masterGuestData: masterGuest,
            masterGuestAddress: address,
            masterGuestDocument: document,
            guestsData: guests,
            paymentData: payment
        }

        const bookingId = await createBooking(payload)

        navigate(`/booking/${bookingId}`)
    }

    return (
        <>
            <div className="container my-4 booking-form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="ancillaries-container p-2">
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
                    <div className="p-4 rounded rounded-2 my-4 master-guest-container">
                        <h3>Intestatario</h3>
                        <MasterGuestForm/>
                    </div>
                    <div className="p-4 rounded rounded-2 my-4 address-container">
                        <h3>Indirizzo</h3>
                        <AddressForm/>
                    </div>
                    <div className="p-4 rounded rounded-2 my-4 document-container">
                        <h3>Documento</h3>
                        <DocumentForm/>
                    </div>
                    <div className="p-4 rounded rounded-2 my-4 guests-container">
                        <h3>Ospiti</h3>
                        {
                            Array.from({length: occupancy}).map((guest, index) => (
                                <GuestsFormItem
                                    key={`guest-form-item-${index}`}
                                    index={index}
                                />
                            ))
                        }
                    </div>
                    <div className="p-4 rounded rounded-2 my-4 payment-container">
                        <h3>Pagamento</h3>
                        <p
                            className="py-2 payment-review"
                        >
                            Per confermare la tua prenotazione, clicca il bottone in basso per procedere al pagamento
                            di <b>
                            € {(policy.price + ancillariesPrice).toFixed(2)}
                        </b>
                        </p>
                        <button
                            onClick={createPayment}
                            className="py-2 px-4 rounded rounded-2 book-now-btn"
                        >
                            PROCEDI AL PAGAMENTO
                        </button>
                    </div>
                    <div className="p-4 rounded rounded-2 my-4 review-container">
                        <h3>Riepilogo</h3>
                        <div className="row py-2">
                            <div className="col col-12 col-md-8">
                                <p className="py-2 review-booking-description">
                                    Stai confermando una prenotazione
                                    dal {format(checkIn, 'dd/MM/yyyy')} al {format(checkOut, 'dd/MM/yyyy')} per {adults + children} ospiti {hasInfant ? 'e un neonato' : ''}.<br/>
                                    La camera scelta è una {solution.roomTypeId.name} in {policy.bookingPolicyId.name}
                                </p>
                            </div>
                            <div className="col col-12 col-md-4">
                                <table className="ms-5 review-table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <p className="review-text">{solution.roomTypeId.name}</p>
                                        </td>
                                        <td className="text-end">
                                            <p className="review-price">€ {Number(policy.price).toFixed(2)}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="review-text">Servizi Extra</p>
                                        </td>
                                        <td className="text-end">
                                            <p className="review-price">€ {ancillariesPrice.toFixed(2)}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="review-text">Totale Soggiorno</p>
                                        </td>
                                        <td className="text-end">
                                            <p className="review-price">
                                                <b>€ {(policy.price + ancillariesPrice).toFixed(2)}</b></p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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