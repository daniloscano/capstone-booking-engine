import {create} from "zustand";

const useBookingStore = create((set => (
    {
        booking: null,
        bookingLoading: false,
        bookingError: null,
        setBooking: (booking) => set({booking}),
        setBookingLoading: (bookingLoading) => set({bookingLoading}),
        setBookingError: (bookingError) => set({bookingError})
    }
)))

export default useBookingStore;