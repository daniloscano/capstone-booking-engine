import {create} from "zustand";

const useRoomUnitStore = create((set => (
    {
        roomUnit: null,
        roomUnitLoading: false,
        roomUnitError: null,
        setRoomUnit: (roomUnit) => set({roomUnit}),
        setRoomUnitLoading: (roomUnitLoading) => set({roomUnitLoading}),
        setRoomUnitError: (roomUnitError) => set({roomUnitError}),
        roomUnitReset: () => set({roomUnit: null})
    }
)))

export default useRoomUnitStore;