import './bookingEngineHeader.css'

const BookingEngineHeader = () => {
    return (
        <>
            <header className="container-fluid d-flex flex-column justify-content-center align-items-center booking-engine-header">
                <div className="booking-engine-header-overlay"></div>
                <div className="text-center p-5 booking-engine-header-content">
                    <h1 className="pb-3 booking-engine-title">Scegli la tua camera</h1>
                    <p className="booking-engine-subtitle">Le nostre migliori soluzioni a tua disposizione!</p>
                </div>
            </header>
        </>
    );
};

export default BookingEngineHeader;