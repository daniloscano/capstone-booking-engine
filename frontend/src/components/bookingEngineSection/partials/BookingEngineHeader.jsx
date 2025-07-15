import './bookingEngineHeader.css'

const BookingEngineHeader = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center booking-engine-header">
                <div className="booking-engine-header-overlay"></div>
                <div className="text-center p-5 booking-engine-header-content">
                    <h1 className="booking-engine-title">Scegli la tua camera</h1>
                    <p className="booking-engine-subtitle">Le nostre migliori soluzioni a tua disposizione!</p>
                </div>
            </div>
        </>
    );
};

export default BookingEngineHeader;