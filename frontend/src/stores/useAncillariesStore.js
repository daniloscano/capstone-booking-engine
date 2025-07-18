import {create} from "zustand";

const useAncillariesStore = create((set => (
    {
        ancillaries: null,
        ancillariesLoading: false,
        ancillariesError: null,
        setAncillaries: (ancillaries) => set({ancillaries}),
        setAncillariesLoading: (ancillariesLoading) => set({ancillariesLoading}),
        setAncillariesError: (ancillariesError) => set({ancillariesError})
    }
)))

export default useAncillariesStore;