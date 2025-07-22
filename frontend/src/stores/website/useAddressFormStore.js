import {create} from "zustand";

const useAddressFormStore = create((set => (
    {
        street: '',
        zipCode: '',
        city: '',
        region: '',
        nation: '',
        setStreet: (street) => set({street}),
        setZipCode: (zipCode) => set({zipCode}),
        setCity: (city) => set({city}),
        setRegion: (region) => set({region}),
        setNation: (nation) => set({nation}),
    }
)))

export default useAddressFormStore;