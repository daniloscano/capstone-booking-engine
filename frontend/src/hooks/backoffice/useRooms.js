import useRoomsStore from "../../stores/backoffice/useRoomsStore.js";

export const useRooms = () => {
    const { setRooms, setRoomsLoading, setRoomsError, setTotalResults } = useRoomsStore()
    const token = localStorage.getItem('token')

    const getAllRooms = async (page, pageSize) => {
        try {
            setRoomsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/room-types?page=${page + 1}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.totalResults)
            setRooms(jsonResponse.data)
        } catch (err) {
            setRoomsLoading(false)
            setRoomsError(err)
        } finally {
            setRoomsLoading(false)
        }
    }

    return {
        getAllRooms
    }
}