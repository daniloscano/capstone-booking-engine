import {create} from "zustand";

const useQuoteRequestStore = create((set) => (
    {
        quoteRequest: null,
        filteredSolutions: [],
        quoteRequestLoading: false,
        quoteRequestError: null,
        setQuoteRequest: (quoteRequest) => set({quoteRequest}),
        setQuoteRequestLoading: (quoteRequestLoading) => set({quoteRequestLoading}),
        setQuoteRequestError: (quoteRequestError) => set({quoteRequestError}),
        setFilteredSolutions: (filteredSolutions) => set({filteredSolutions}),
        reset: () => set({quoteRequest: null})
    }
))

export default useQuoteRequestStore;