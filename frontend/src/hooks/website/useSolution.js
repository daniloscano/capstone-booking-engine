import useSolutionStore from "../../stores/website/useSolutionStore.js";

export const useSolution = () => {
    const { setSolution, setSolutionLoading, setSolutionError } = useSolutionStore()

    const getSolutionById = async (solutionId) => {
        try {
            setSolutionLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/quote-solutions/${solutionId}`)
            const result = await response.json()
            setSolution(result.quoteSolution)
        } catch (err) {
            setSolutionLoading(false)
            setSolutionError(err)
        } finally {
            setSolutionLoading(false)
        }
    }

    return {
        getSolutionById
    }
}