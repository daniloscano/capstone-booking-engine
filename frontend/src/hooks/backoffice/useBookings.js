import useBookingsStore from "../../stores/backoffice/useBookingsStore.js";

export const useBookings = () => {
    const { setBookings, setBookingsLoading, setBookingsError, setTotalResults } = useBookingsStore()
    const token = localStorage.getItem('token')

    const getAllBookings = async (page, pageSize) => {
        try {
            setBookingsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/bookings?page=${page + 1}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.bookings.totalResults)
            setBookings(jsonResponse.bookings.data)
        } catch (err) {
            setBookingsLoading(false)
            setBookingsError(err)
        } finally {
            setBookingsLoading(false)
        }
    }

    return {
        getAllBookings
    }
}