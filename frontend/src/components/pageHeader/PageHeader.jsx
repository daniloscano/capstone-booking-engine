import './pageHeader.css'
import Navigation from "../navigation/Navigation.jsx";

const PageHeader = () => {
    return (
        <>
            <div
                className="container-fluid d-flex flex-column justify-content-center align-items-center p-0 page-header">
                <Navigation/>
                <div className="page-header-image">
                    <img src="/rooms-section.png" alt="contact-us"/>
                </div>
                <div className="page-header-overlay"></div>
                <div className="d-flex flex-column justify-content-center align-items-center gap-2 page-header-content">
                    <div className="text-center p-5 page-header-headings">
                        <h1 className="pb-4 page-header-title">Contattaci</h1>
                        <p className="page-header-subtitle">Siamo sempre disponibili e attenti alle richieste dei nostri ospiti</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHeader;