import {create} from "zustand";

const useDocumentFormStore = create((set => (
    {
        type: '',
        number: '',
        expireDate: '',
        setType: (type) => set({type}),
        setNumber: (number) => set({number}),
        setExpireDate: (expireDate) => set({expireDate})
    }
)))

export default useDocumentFormStore;