import useRoomsStore from "../../stores/website/useRoomsStore.js";
import useRoomDetailsStore from "../../stores/website/useRoomDetailsStore.js";

export const useRoomTypes = () => {
    const { setRooms, setRoomsLoading, setRoomsError } = useRoomsStore()
    const { setRoomDetails, setRoomDetailsLoading, setRoomDetailsError } = useRoomDetailsStore()

    const getRoomTypes = async () => {
        try {
            setRoomsLoading(true)
            setRoomsError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-types`)
            const data = await response.json()
            setRooms(data.data)
        } catch (err) {
            setRoomsError(err)
        } finally {
            setRoomsLoading(false)
        }
    }

    const getRoomTypeById = async (roomId) => {
        try {
            setRoomDetailsLoading(true)
            setRoomDetailsError(null)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-types/${roomId}`)
            const data = await response.json()
            setRoomDetails(data.roomType)
        } catch (err) {
            setRoomDetailsError(err)
        } finally {
            setRoomDetailsLoading(false)
        }
    }

    return {
        getRoomTypes,
        getRoomTypeById
    }
}