import {create} from "zustand";

const useBookingsStore = create((set => (
    {
        bookings: null,
        bookingsLoading: false,
        bookingsError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setBookings: (bookings) => set({bookings}),
        setBookingsLoading: (bookingsLoading) => set({bookingsLoading}),
        setBookingsError: (bookingsError) => set({bookingsError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults})
    }
)))

export default useBookingsStore;