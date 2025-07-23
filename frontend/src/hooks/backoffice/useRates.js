import useRatesStore from "../../stores/backoffice/useRatesStore.js";

export const useRates = () => {
    const { setRates, setRatesLoading, setRatesError, setTotalResults } = useRatesStore()
    const token = localStorage.getItem('token')

    const getAllRates = async (page, pageSize) => {
        try {
            setRatesLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-rates?page=${page + 1}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.roomRates.totalResults)
            setRates(jsonResponse.roomRates.data)
        } catch (err) {
            setRatesLoading(false)
            setRatesError(err)
        } finally {
            setRatesLoading(false)
        }
    }

    return {
        getAllRates
    }
}