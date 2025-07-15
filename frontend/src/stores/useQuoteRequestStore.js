import {create} from "zustand";

const useQuoteRequestStore = create((set) => (
    {
        quoteRequest: {},
        quoteRequestLoading: true,
        quoteRequestError: null,
        setQuoteRequest: (quoteRequest) => set({ quoteRequest }),
        setQuoteRequestLoading: (quoteRequestLoading) => set({ quoteRequestLoading }),
        setQuoteRequestError: (quoteRequestError) => set({ quoteRequestError })
    }
))

export default useQuoteRequestStore;