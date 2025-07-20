import useLoginFormStore from "../../stores/useLoginFormStore.js";
import {useBackofficeLogin} from "../../hooks/useBackofficeLogin.jsx";

const LoginForm = () => {
    const { loginFormData, setLoginFormData, reset } = useLoginFormStore()
    const { loginOperator } = useBackofficeLogin()

    const onChangeInput = (e) => {
        const { name, value } = e.target

        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        loginOperator(loginFormData)

        reset()
    }

    return (
        <>
            <section className="login-section">
                <div className="container my-4 p-4 w-50 mx-auto login-container">
                    <form
                        className="w-75 mx-auto"
                        onSubmit={onSubmit}
                    >
                        <h2>Accedi al Backoffice</h2>
                        <div className="d-flex flex-column gap-2 my-3 input-container">
                            <label htmlFor="username-input">Nome Utente</label>
                            <input
                                className="login-input"
                                type="text"
                                name="username"
                                id="username-input"
                                placeholder="Nome utente"
                                value={loginFormData.username}
                                onChange={onChangeInput}
                            />
                        </div>
                        <div className="d-flex flex-column gap-2 my-3 input-container">
                            <label htmlFor="password-input">Password</label>
                            <input
                                className="login-input"
                                type="password"
                                name="password"
                                id="password-input"
                                placeholder="Password"
                                value={loginFormData.password}
                                onChange={onChangeInput}
                            />
                        </div>
                        <div className="d-flex justify-content-end my-3">
                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                ACCEDI
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LoginForm;