import './contactsInfo.css'

const ContactsInfo = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                <div className="col col-12 py-4 contacts-info-section">
                    <p className="contacts-info-cta">La Reception è attiva tutti i giorni 24 ore su 24, non esitare a contattarci. Il nostro obiettivo è aiutarti a creare la tua vacanza perfetta!</p>
                    <p className="contacts-info-cta">Chiamaci al numero <a href="tel:">392 4847505</a></p>
                    <p className="contacts-info-cta">Scrivici all'indirizzo <a href="mailto:">hoteleden@gmail.com</a></p>
                </div>
                    <div className="col col-12 col-md-7 order-last order-md-2">
                        <iframe
                            className="iframe-maps-google"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.963126474669!2d12.475355275076625!3d41.87213978918658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6173fb8c8ea7%3A0x1a413c9507f97391!2sEPICODE%20Institute%20of%20Technology!5e0!3m2!1sit!2sit!4v1752530420967!5m2!1sit!2sit"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="col col-12 col-md-5 px-3 order-first order-md-3">
                        <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-5 contacts-info">
                            <div className="text-center">
                                <h2 className="pb-3 contacts-info-title">Hotel Eden</h2>
                                <p className="contacts-info-address">Via Roma, 25</p>
                                <p className="contacts-info-address">80100 Roma, Italia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsInfo;