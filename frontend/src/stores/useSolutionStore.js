import {create} from "zustand";

const useSolutionStore = create((set) => (
    {
        solution: null,
        solutionLoading: false,
        solutionError: null,
        setSolution: (solution) => set({ solution }),
        setSolutionLoading: (solutionLoading) => set({ solutionLoading }),
        setSolutionError: (solutionError) => set({ solutionError })
    }
))

export default useSolutionStore;