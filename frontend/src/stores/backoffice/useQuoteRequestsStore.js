import {create} from "zustand";

const useQuoteRequestsStore = create((set => (
    {
        quoteRequests: null,
        quoteRequestsLoading: false,
        quoteRequestsError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setQuoteRequests: (quoteRequests) => set({quoteRequests}),
        setQuoteRequestsLoading: (quoteRequestsLoading) => set({quoteRequestsLoading}),
        setQuoteRequestsError: (quoteRequestsError) => set({quoteRequestsError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults})
    }
)))

export default useQuoteRequestsStore;