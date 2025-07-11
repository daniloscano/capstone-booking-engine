import useRoomsStore from "../stores/useRoomsStore.js";

export const useRoomTypes = () => {
    const { setRooms, setLoading, setError } = useRoomsStore()

    const getRoomTypes = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-types`)
            console.log(response)
            const data = await response.json()
            setRooms(data.data)
        } catch (err) {
            console.log(err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return {
        getRoomTypes
    }
}