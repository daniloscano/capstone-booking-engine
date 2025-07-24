import {create} from "zustand";

const useMobileMenuStore = create((set => (
    {
        isMobileMenuVisible: false,
        setIsMobileMenuVisible: (isMobileMenuVisible) => set({isMobileMenuVisible})
    }
)))

export default useMobileMenuStore;