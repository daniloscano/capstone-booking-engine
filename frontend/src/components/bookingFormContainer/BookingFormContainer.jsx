import {useParams} from "react-router-dom";
import {useBooking} from "../../hooks/useBooking.js";
import useBookingStore from "../../stores/useBookingStore.js";
import {useEffect} from "react";
import Loader from "../../loader/Loader.jsx";

const BookingFormContainer = () => {
    const { solutionId, policyCode } = useParams()
    const { checkRoomAvailability } = useBooking()
    const { roomUnit, roomUnitLoading, roomUnitError, roomUnitReset } = useBookingStore()

    useEffect(() => {
        checkRoomAvailability(solutionId, policyCode)
    }, []);

    useEffect(() => {
        return () => roomUnitReset
    }, [roomUnitReset])

    if (!roomUnit) return

    return (
        <>
            {
                roomUnitLoading && !roomUnit && <Loader />
            }
            {
                !roomUnitLoading && roomUnit.available && <p>{`RoomUnit: ${roomUnit.roomUnitId}`}</p>
            }
            {
                !roomUnitLoading && roomUnit.available && (
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