import {create} from "zustand";

const useBookingEngineFormStore = create((set) => (
    {
        dates: [],
        adults: 0,
        children: 0,
        infant: false,
        setDates: (dates) => set({ dates }),
        setAdults: (adults) => set({ adults }),
        setChildren: (children) => set({ children }),
        setInfant: (infant) => set({ infant })
    }
))

export default useBookingEngineFormStore;