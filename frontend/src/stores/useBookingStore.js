import {create} from "zustand";

const useBookingStore = create((set => (
    {
        booking: null,
        bookingLoading: false,
        bookingError: null,
        roomUnit: null,
        roomUnitLoading: false,
        roomUnitError: null,
        setBooking: (booking) => set({booking}),
        setBookingLoading: (bookingLoading) => set({bookingLoading}),
        setBookingError: (bookingError) => set({bookingError}),
        setRoomUnit: (roomUnit) => set({roomUnit}),
        setRoomUnitLoading: (roomUnitLoading) => set({roomUnitLoading}),
        setRoomUnitError: (roomUnitError) => set({roomUnitError}),
        roomUnitReset: () => set({roomUnit: null})
    }
)))

export default useBookingStore;