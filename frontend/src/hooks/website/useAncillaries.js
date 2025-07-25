import useAncillariesStore from "../../stores/website/useAncillariesStore.js";

export const useAncillaries = () => {
    const { setAncillaries, setAncillariesLoading, setAncillariesError } = useAncillariesStore()

    const getAncillaries = async () => {
        try {
            setAncillariesLoading(true)
            setAncillariesError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/ancillaries`)
            const result = await response.json()
            setAncillaries(result.ancillaries.data)
        } catch (err) {
            setAncillariesLoading(false)
            setAncillariesError(err)
        } finally {
            setAncillariesLoading(false)
        }
    }

    return {
        getAncillaries
    }
}