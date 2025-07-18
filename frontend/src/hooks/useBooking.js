import useBookingStore from "../stores/useBookingStore.js";

export const useBooking = () => {
    const { setBookingIdError } = useBookingStore()
    const { setBooking, setBookingLoading, setBookingError } = useBookingStore()

    const createBooking = async (payload) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/create-booking`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const result = await response.json()
            return result.booking._id
        } catch (err) {
            setBookingIdError(err)
        }
    }

    const getBookingById = async (bookingId) => {
        try {
            setBookingLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/bookings/${bookingId}`)
            const result = await response.json()
            const booking = result.booking
            setBooking(booking)
        } catch (err) {
            setBookingLoading(false)
            setBookingError(err)
        } finally {
            setBookingLoading(false)
        }
    }

    return {
        createBooking,
        getBookingById
    }
}