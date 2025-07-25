import { create } from "zustand";

const useRoomDetailsStore = create((set) => (
    {
        roomDetails: null,
        roomDetailsLoading: false,
        roomDetailsError: null,
        setRoomDetails: (room) => set({ roomDetails: room }),
        setRoomDetailsLoading: (loading) => set({ roomDetailsLoading: loading }),
        setRoomDetailsError: (error) => set({ roomDetailsError: error })
    }
))

export default useRoomDetailsStore;