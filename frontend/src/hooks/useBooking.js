import useBookingStore from "../stores/useBookingStore.js";

export const useBooking = () => {
    const { setBooking, setBookingLoading, setBookingError } = useBookingStore()
    const { setRoomUnit, setRoomUnitError } = useBookingStore()

    const checkRoomAvailability = async (solutionId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-availability/${solutionId}`)
            const result = await response.json()
            setRoomUnit(result.availability)
        } catch (err) {
            setRoomUnitError(err)
        }
    }

    return {
        checkRoomAvailability
    }
}