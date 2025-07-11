import { create } from "zustand"

const useRoomsStore = create((set) => (
    {
        rooms: [],
        loading: false,
        error: null,
        setRooms: (rooms) => set({ rooms }),
        setLoading: (loading) => set({ loading }),
        setError: (error) => ({ error })
    }
))

export default useRoomsStore;