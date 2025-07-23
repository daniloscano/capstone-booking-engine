import {create} from "zustand";

const useServicesStore = create((set => (
    {
        services: null,
        servicesLoading: false,
        servicesError: null,
        page: 0,
        pageSize: 10,
        totalResults: 0,
        setServices: (services) => set({services}),
        setServicesLoading: (servicesLoading) => set({servicesLoading}),
        setServicesError: (servicesError) => set({servicesError}),
        setPage: (page) => set({page}),
        setPageSize: (pageSize) => set({pageSize}),
        setTotalResults: (totalResults) => set({totalResults})
    }
)))

export default useServicesStore;