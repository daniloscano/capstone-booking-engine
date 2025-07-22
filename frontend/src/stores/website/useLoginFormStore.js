import {create} from "zustand";

const useLoginFormStore = create((set => (
    {
        username: '',
        password: '',
        setUsername: (username) => set({username}),
        setPassword: (password) => set({password}),
        reset: () => set({username: '', password: ''})
    }
)))

export default useLoginFormStore;