import {create} from "zustand";

const useRatesStore = create((set => (
    {
        rates: null,
        ratesLoading: false,
        ratesError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setRates: (rates) => set({rates}),
        setRatesLoading: (ratesLoading) => set({ratesLoading}),
        setRatesError: (ratesError) => set({ratesError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults})
    }
)))

export default useRatesStore;