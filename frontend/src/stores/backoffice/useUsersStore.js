import {create} from "zustand";

const useUsersStore = create((set => (
    {
        users: null,
        usersLoading: false,
        usersError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setUsers: (users) => set({users}),
        setUsersLoading: (usersLoading) => set({usersLoading}),
        setUsersError: (usersError) => set({usersError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults})
    }
)))

export default useUsersStore;