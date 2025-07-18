import {create} from "zustand";
import {persist} from "zustand/middleware";

const useSolutionStore = create(
    persist(
        (set) => (
            {
                solution: null,
                solutionLoading: false,
                solutionError: null,
                setSolution: (solution) => set({solution}),
                setSolutionLoading: (solutionLoading) => set({solutionLoading}),
                setSolutionError: (solutionError) => set({solutionError}),
                reset: () => set({solution: null})
            }
        ),
        {
            name: 'solution-storage',
            partialize: (state) => ({
                solution: state.solution
            })
        }
    ))

export default useSolutionStore;