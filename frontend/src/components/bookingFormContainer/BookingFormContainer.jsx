import {useParams} from "react-router-dom";
import {useRoomUnit} from "../../hooks/useRoomUnit.js";
import {useEffect} from "react";
import useRoomUnitStore from "../../stores/useRoomUnitStore.js";
import useAncillariesStore from "../../stores/useAncillariesStore.js";
import {useAncillaries} from "../../hooks/useAncillaries.js";
import './bookingFormContainer.css'
import useQuoteRequestStore from "../../stores/useQuoteRequestStore.js";
import AncillaryItem from "./partials/AncillaryItem.jsx";
import MasterGuestForm from "./partials/MasterGuestForm.jsx";
import AddressForm from "./partials/AddressForm.jsx";
import DocumentForm from "./partials/DocumentForm.jsx";
import GuestsFormItem from "./partials/GuestsFormItem.jsx";

const BookingFormContainer = () => {
    const {solutionId, policyCode} = useParams()
    const {quoteRequest} = useQuoteRequestStore()
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

    if (!quoteRequest) return

    const {checkIn, checkOut, daysStay, adults, children} = quoteRequest
    const occupancy = adults + children

    console.log('checkIn', checkIn)
    console.log('checkOut', checkOut)
    console.log('days', daysStay)
    console.log('adults', adults)
    console.log('children', children)

    return (
        <>
            <div className="container my-4 booking-form-container">
                <form>
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
                        <h4>Intestatario</h4>
                        <MasterGuestForm />
                    </div>
                    <div className="address-container py-3">
                        <h4>Indirizzo</h4>
                        <AddressForm />
                    </div>
                    <div className="document-container py-3">
                        <h4>Documento</h4>
                        <DocumentForm />
                        <div className="guests-container py-4">
                            <h4>Ospiti</h4>
                            {
                                Array.from({ length: occupancy}).map((guest, index) => (
                                    <GuestsFormItem
                                        key={`guest-form-item-${index}`}
                                    />
                                ))
                            }
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