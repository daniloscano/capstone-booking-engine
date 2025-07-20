import {create} from "zustand";

const useLoginFormStore = create((set => (
    {
        loginFormData: {},
        setLoginFormData: (loginFormData) => set({loginFormData}),
        reset: () => set({loginFormData: {}})
    }
)))

export default useLoginFormStore;