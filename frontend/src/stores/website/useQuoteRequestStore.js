import {create} from "zustand";
import {persist} from "zustand/middleware";

const useQuoteRequestStore = create(
    persist(
        (set) => (
            {
                quoteRequest: null,
                quoteRequestSolutions: [],
                quoteRequestLoading: false,
                quoteRequestError: null,
                setQuoteRequest: (quoteRequest) => set({quoteRequest}),
                setQuoteRequestSolutions: (quoteRequestSolutions) => set({quoteRequestSolutions}),
                setQuoteRequestLoading: (quoteRequestLoading) => set({quoteRequestLoading}),
                setQuoteRequestError: (quoteRequestError) => set({quoteRequestError}),
                resetQuoteRequest: () => set({quoteRequest: null, quoteRequestSolutions: []})
            }
        ),
        {
            name: 'quote-request-storage',
            partialize: (state) => ({
                quoteRequest: state.quoteRequest,
                quoteRequestSolutions: state.quoteRequestSolutions
            })
        }
    ))

export default useQuoteRequestStore;