import { create } from "zustand";

const useBookingFormStore = create((set) => ({
    ancillariesIds: [],
    ancillariesPrice: 0,

    setAncillariesIds: (ancillaryId) => set((state) => {
        if (state.ancillariesIds.includes(ancillaryId)) return state;
        return { ancillariesIds: [...state.ancillariesIds, ancillaryId] };
    }),

    setAncillariesPrice: (priceToAdd) =>
        set((state) => ({
            ancillariesPrice: state.ancillariesPrice + priceToAdd
        }))
}));

export default useBookingFormStore;
