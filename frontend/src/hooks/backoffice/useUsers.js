import useUsersStore from "../../stores/backoffice/useUsersStore.js";

export const useUsers = () => {
    const { setUsers, setUsersLoading, setUsersError, setTotalResults } = useUsersStore()
    const token = localStorage.getItem('token')

    const getAllUsers = async (page, pageSize) => {
        try {
            setUsersLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/users?page=${page + 1}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.users.totalResults)
            setUsers(jsonResponse.users.data)
        } catch (err) {
            setUsersLoading(false)
            setUsersError(err)
        } finally {
            setUsersLoading(false)
        }
    }

    return {
        getAllUsers
    }
}