import useServicesStore from "../../stores/backoffice/useServicesStore.js";

export const useServices = () => {
    const { setServices, setServicesLoading, setServicesError, setTotalResults } = useServicesStore()
    const token = localStorage.getItem('token')

    const getAllServices = async (page, pageSize) => {
        try {
            setServicesLoading(true)
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/ancillaries?page=${page + 1}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": JSON.parse(token)
                }
            })
            const jsonResponse = await response.json()
            setTotalResults(jsonResponse.ancillaries.totalResults)
            setServices(jsonResponse.ancillaries.data)
        } catch (err) {
            setServicesLoading(false)
            setServicesError(err)
        } finally {
            setServicesLoading(false)
        }
    }

    return {
        getAllServices
    }
}