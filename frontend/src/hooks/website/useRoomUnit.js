import useRoomUnitStore from "../../stores/website/useRoomUnitStore.js";

export const useRoomUnit = () => {
    const { setRoomUnit, setRoomUnitLoading, setRoomUnitError } = useRoomUnitStore()

    const checkRoomAvailability = async (solutionId) => {
        try {
            setRoomUnitLoading(true)
            setRoomUnitError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-availability/${solutionId}`)
            const result = await response.json()
            setRoomUnit(result.availability)
        } catch (err) {
            setRoomUnitLoading(false)
            setRoomUnitError(err)
        } finally {
            setRoomUnitLoading(false)
        }
    }

    return {
        checkRoomAvailability
    }
}