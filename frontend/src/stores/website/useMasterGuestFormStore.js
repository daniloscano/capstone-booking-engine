import {create} from "zustand";

const useMasterGuestFormStore = create((set => (
    {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        setFirstName: (firstName) => set({firstName}),
        setLastName: (lastName) => set({lastName}),
        setGender: (gender) => set({gender}),
        setDateOfBirth: (dateOfBirth) => set({dateOfBirth}),
        setEmail: (email) => set({email}),
        setPhone: (phone) => set({phone})
    }
)))

export default useMasterGuestFormStore;