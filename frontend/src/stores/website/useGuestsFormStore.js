import {create} from 'zustand'

const useGuestsFormStore = create((set => (
        {
            guests: [],

            initializeGuests: (count) => set({
                guests: Array.from({length: count}, () => ({
                    firstName: '',
                    lastName: '',
                    gender: '',
                    dateOfBirth: ''
                }))
            }),

            updateGuestField: (index, field, value) =>
                set((state) => {
                    const updatedGuests = [...state.guests]
                    updatedGuests[index][field] = value
                    return {guests: updatedGuests}
                })
        }
)))

export default useGuestsFormStore;
