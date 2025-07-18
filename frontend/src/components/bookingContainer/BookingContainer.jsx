import {useParams} from "react-router-dom";
import useBookingStore from "../../stores/useBookingStore.js";
import {useBooking} from "../../hooks/useBooking.js";
import useQuoteRequestStore from "../../stores/useQuoteRequestStore.js";
import useSolutionStore from "../../stores/useSolutionStore.js";
import {useEffect} from "react";
import Loader from "../../loader/Loader.jsx";
import {format} from "date-fns";
import './bookingContainer.css'

const BookingContainer = () => {
    const {bookingId} = useParams()
    const {booking, bookingLoading, bookingError} = useBookingStore()
    const {getBookingById} = useBooking()
    const {resetQuoteRequest} = useQuoteRequestStore()
    const {resetSolution} = useSolutionStore()

    useEffect(() => {
        getBookingById(bookingId)
        resetQuoteRequest()
        resetSolution()
    }, []);

    if (!booking) return

    const {checkIn, checkOut, daysStay, roomId: room,
        adults, children, hasInfant,
        ancillariesIds,
        masterGuestId: master,
        guestsIds,
        policyId,
        price,
        ancillariesPrice,
        totalPrice
    } = booking

    return (
        <>
            <div className="container my-4 booking-container">
                {
                    bookingLoading && !booking && !bookingError && <Loader/>
                }
                {
                    !bookingLoading && !bookingError && booking && (
                        <>
                            <div className="d-flex flex-column align-items-center gap-2 my-4">
                                <h2 className="booking-container-title">Grazie per aver scelto Hotel Eden</h2>
                                <p className="booking-container-subtitle">
                                    Gentile {master.firstName} {master.lastName}, di seguito trova un riepilogo della sua
                                    prenotazione
                                </p>
                            </div>
                            <div className="p-4 px-5 my-4 booking-information-container">
                                <h3>Prenotazione: {bookingId}</h3>
                                <div className="p-4 my-3 rounded rounded-2 booking-details-card">
                                    <h4 className="mb-4">Soggiorno</h4>
                                    <div className="row mt-3">
                                        <div className="col col-12 col-md-6">
                                            <p className="booking-details-info"><b>Camera</b>: {room.roomTypeId.name}</p>
                                            <p className="booking-details-info"><b>Arrivo</b>: {format(checkIn, 'dd/MM/yyyy')}</p>
                                            <p className="booking-details-info"><b>Partenza</b>: {format(checkOut, 'dd/MM/yyyy')}</p>
                                            <p className="booking-details-info"><b>Notti</b>: {daysStay}</p>
                                        </div>
                                        <div className="col col-12 col-md-6">
                                            <p className="booking-details-info"><b>Adulti</b>: {adults}</p>
                                            {
                                                children > 0 && (
                                                    <p className="booking-details-info"><b>Bambini</b>: {children}</p>
                                                )
                                            }
                                            <p className="booking-details-info"><b>Infant</b>: {hasInfant ? '1' : '0'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 my-3 rounded rounded-2 guests-details-card">
                                    <h4 className="mb-4">Intestatario</h4>
                                    <div className="row my-3">
                                        <div className="col col-12 col-md-6">
                                            <p className="guests-details-info"><b>Nome</b>: {master.firstName}</p>
                                            <p className="guests-details-info"><b>Cognome</b>: {master.lastName}</p>
                                        </div>
                                        <div className="col col-12 col-md-6">
                                            <p className="guests-details-info"><b>Sesso</b>: {master.gender === 'male' ? 'Uomo' : 'Donna'}</p>
                                            <p className="guests-details-info"><b>Data di nascita</b>: {format(master.dateOfBirth, 'dd/MM/yyyy')}</p>
                                        </div>
                                    </div>
                                    <h4 className="mb-4">Ospiti</h4>
                                    {
                                        guestsIds.slice(1).map((guest, index) => (
                                            <div
                                                key={`guest-${index}`}
                                                className="row mt-3"
                                            >
                                                <div className="col col-12 col-md-6">
                                                    <p className="guests-details-info"><b>Nome</b>: {guest.firstName}</p>
                                                    <p className="guests-details-info"><b>Cognome</b>: {guest.lastName}</p>
                                                </div>
                                                <div className="col col-12 col-md-6">
                                                    <p className="guests-details-info"><b>Sesso</b>: {guest.gender === 'male' ? 'Uomo' : 'Donna'}</p>
                                                    <p className="guests-details-info"><b>Data di nascita</b>: {format(guest.dateOfBirth, 'dd/MM/yyyy')}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="p-4 my-3 rounded rounded-2 booking-summary-card">
                                    <div className="row">
                                        <div className="col col-12 col-md-6">
                                            <h4 className="mb-4">Servizi Aggiuntivi</h4>
                                            {
                                                ancillariesIds.map((ancillary, index) => (
                                                    <p
                                                        key={`ancillary-${index}`}
                                                        className="booking-summary-info"
                                                    >
                                                        {ancillary.name}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                        <div className="col col-12 col-md-6">
                                            <h4 className="mb-4">Riepilogo Importi</h4>
                                            <p className="booking-summary-info"><b>{policyId.name}</b></p>
                                            <p className="booking-summary-info"><b>Soggiorno in {room.roomTypeId.name}</b>: € {price.toFixed(2)}</p>
                                            <p className="booking-summary-info"><b>Servizi Aggiuntivi</b>: € {ancillariesPrice.toFixed(2)}</p>
                                            <p className="booking-summary-info"><b>Totale Prenotazione</b>: € {totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default BookingContainer;