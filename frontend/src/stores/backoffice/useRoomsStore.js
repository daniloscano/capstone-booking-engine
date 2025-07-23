import {create} from "zustand";

const useRoomsStore = create((set => (
    {
        rooms: null,
        roomsLoading: false,
        roomsError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setRooms: (rooms) => set({rooms}),
        setRoomsLoading: (roomsLoading) => set({roomsLoading}),
        setRoomsError: (roomsError) => set({roomsError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults}),
    }
)))

export default useRoomsStore;