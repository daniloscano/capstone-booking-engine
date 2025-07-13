import useRoomsStore from "../stores/useRoomsStore.js";
import useRoomDetailsStore from "../stores/useRoomDetailsStore.js";

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
            console.log(err)
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
            console.log(data.roomType)
        } catch (err) {
            console.log(err)
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