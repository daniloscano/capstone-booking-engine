import './contacts.css'

const Contacts = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center gap-3 my-4 contacts-section">
                <div
                    className="container d-flex flex-column justify-content-center align-items-center gap-4 py-5 contacts-content"
                >
                    <h1 className="contacts-title">CONTATTACI</h1>
                    <p className="contacts-subtitle">Saremo lieti di rispondere a tutte le tue richieste</p>
                    <button
                        className="rounded rounded-1 py-2 px-4 book-now-btn"
                    >
                        CONTATTACI
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contacts;