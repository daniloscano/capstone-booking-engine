import useQuoteRequestStore from "../stores/useQuoteRequestStore.js";

export const useCheckAvailability = () => {
    const { setQuoteRequest, setQuoteRequestLoading, setQuoteRequestError } = useQuoteRequestStore()

    const checkAvailability = async (payload) => {
        try {
            setQuoteRequestLoading(true)
            setQuoteRequestError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const quoteRequest = await response.json()
            console.log(quoteRequest)
            setQuoteRequest(quoteRequest)
        } catch (err) {
            console.log(err)
            setQuoteRequestError(err)
        } finally {
            setQuoteRequestLoading(false)
        }
    }

    return {
        checkAvailability
    }
}