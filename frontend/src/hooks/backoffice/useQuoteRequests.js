import useQuoteRequestsStore from "../../stores/backoffice/useQuoteRequestsStore.js";

export const useQuoteRequests = () => {
    const { setQuoteRequests, setQuoteRequestsLoading, setQuoteRequestsError, setTotalResults } = useQuoteRequestsStore()
    const token = localStorage.getItem('token')

    const getAllQuoteRequests = async (page, pageSize) => {
        try {
            setQuoteRequestsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/quote-requests?page=${page}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.quoteRequests.totalResults)
            setQuoteRequests(jsonResponse.quoteRequests.data)
        } catch (err) {
            setQuoteRequestsLoading(false)
            setQuoteRequestsError(err)
        } finally {
            setQuoteRequestsLoading(false)
        }
    }

    return {
        getAllQuoteRequests
    }
}