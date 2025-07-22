import useLoginFormStore from "../../../stores/website/useLoginFormStore.js";
import {useBackofficeLogin} from "../../../hooks/website/useBackofficeLogin.js";
import './loginForm.css'

const LoginForm = () => {
    const {username, setUsername, password, setPassword, reset} = useLoginFormStore()
    const {loginOperator} = useBackofficeLogin()

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            username,
            password
        }

        loginOperator(payload)

        reset()
    }

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center p-5 login-container">
                <form
                    className="p-4 rounded rounded-2 login-form"
                    onSubmit={onSubmit}
                >
                    <h2 className="mb-4 login-title">Accedi al Backoffice</h2>
                    <div className="d-flex flex-column gap-2 my-3 login-input-container">
                        <label htmlFor="username-input">Nome Utente</label>
                        <input
                            className="py-1 px-2 login-form-input"
                            type="text"
                            name="username"
                            id="username-input"
                            placeholder="Nome utente"
                            value={username}
                            onChange={onChangeUsername}
                        />
                    </div>
                    <div className="d-flex flex-column gap-2 my-3 input-container">
                        <label htmlFor="password-input">Password</label>
                        <input
                            className="py-1 px-2 login-form-input"
                            type="password"
                            name="password"
                            id="password-input"
                            placeholder="Password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className="d-flex justify-content-end my-3">
                        <button
                            type="submit"
                            className="py-2 px-4 rounded rounded-2 book-now-btn"
                        >
                            ACCEDI
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;