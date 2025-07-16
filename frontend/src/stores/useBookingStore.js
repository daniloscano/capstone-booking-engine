import {create} from "zustand";

const useBookingStore = create((set => (
    {
        booking: null,
        bookingLoading: false,
        bookingError: null,
        roomUnit: null,
        roomUnitError: null,
        setBooking: (booking) => set({booking}),
        setBookingLoading: (bookingLoading) => set({bookingLoading}),
        setBookingError: (bookingError) => set({bookingError}),
        setRoomUnit: (roomUnit) => set({roomUnit}),
        setRoomUnitError: (roomUnitError) => set({roomUnitError})
    }
)))

export default useBookingStore;