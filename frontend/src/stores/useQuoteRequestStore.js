import {create} from "zustand";

const useQuoteRequestStore = create((set) => (
    {
        quoteRequest: null,
        quoteRequestSolutions: [],
        quoteRequestLoading: false,
        quoteRequestError: null,
        setQuoteRequest: (quoteRequest) => set({quoteRequest}),
        setQuoteRequestSolutions: (quoteRequestSolutions) => set({quoteRequestSolutions}),
        setQuoteRequestLoading: (quoteRequestLoading) => set({quoteRequestLoading}),
        setQuoteRequestError: (quoteRequestError) => set({quoteRequestError}),
        reset: () => set({quoteRequest: null, quoteRequestSolutions: [] })
    }
))

export default useQuoteRequestStore;