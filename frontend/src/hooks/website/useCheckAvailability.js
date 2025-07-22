import useQuoteRequestStore from "../../stores/website/useQuoteRequestStore.js";

export const useCheckAvailability = () => {
    const { setQuoteRequest, setQuoteRequestLoading, setQuoteRequestError } = useQuoteRequestStore()

    const checkAvailability = async (payload) => {
        try {
            setQuoteRequestLoading(true)
            setQuoteRequestError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/check-availability`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const result = await response.json()
            setQuoteRequest(result.quoteRequest)
        } catch (err) {
            setQuoteRequestError(err)
        } finally {
            setQuoteRequestLoading(false)
        }
    }

    return {
        checkAvailability
    }
}