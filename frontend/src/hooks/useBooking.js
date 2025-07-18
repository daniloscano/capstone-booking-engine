import useBookingStore from "../stores/useBookingStore.js";

export const useBooking = () => {
    const { setBookingIdError } = useBookingStore()

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

    return {
        createBooking
    }
}