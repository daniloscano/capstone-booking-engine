import {create} from "zustand";

const useBookingStore = create((set => (
    {
        bookingIdError: null,
        booking: null,
        bookingLoading: false,
        bookingError: null,
        setBookingIdError: (bookingIdError) => set({bookingIdError}),
        setBooking: (booking) => set({booking}),
        setBookingLoading: (bookingLoading) => set({bookingLoading}),
        setBookingError: (bookingError) => set({bookingError})
    }
)))

export default useBookingStore;