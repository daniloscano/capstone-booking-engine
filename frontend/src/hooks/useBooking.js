import useBookingStore from "../stores/useBookingStore.js";

export const useBooking = () => {
    const { setBooking, setBookingLoading, setBookingError } = useBookingStore()
    const { setRoomUnit, setRoomUnitLoading, setRoomUnitError } = useBookingStore()

    const checkRoomAvailability = async (solutionId) => {
        try {
            setRoomUnitLoading(true)
            setRoomUnitError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-availability/${solutionId}`)
            const result = await response.json()
            setRoomUnit(result.availability)
        } catch (err) {
            setRoomUnitLoading(false)
            setRoomUnitError(err)
        } finally {
            setRoomUnitLoading(false)
        }
    }

    return {
        checkRoomAvailability
    }
}