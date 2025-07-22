import {useNavigate} from "react-router-dom";

export const useBackofficeLogin = () => {
    const navigate = useNavigate()

    const loginOperator = async (payload) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const jsonResponse = await response.json()

            if (response.ok) {
                localStorage.setItem('token', JSON.stringify(jsonResponse.token))
                setTimeout(() => {
                    navigate("/backoffice/dashboard", { replace: true })
                }, 1000)
            }

            return jsonResponse.token
        } catch (err) {
            console.log(err)
        }
    }

    return {
        loginOperator
    }
}