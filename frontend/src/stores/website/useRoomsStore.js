import { create } from "zustand"

const useRoomsStore = create((set) => (
    {
        rooms: [],
        roomsLoading: false,
        roomsError: null,
        setRooms: (rooms) => set({ rooms }),
        setRoomsLoading: (loading) => set({ loading }),
        setRoomsError: (error) => ({ error })
    }
))

export default useRoomsStore;