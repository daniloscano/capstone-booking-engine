import './bookingEngineForm.css'
import {Calendar} from "primereact/calendar";

const BookingEngineForm = () => {



    return (
        <>
            <form className="row align-items-center p-3 booking-engine-form">
                <div className="col col-12 col-lg-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="stay-input">Scegli il periodo</label>
                        <Calendar
                            className="booking-engine-form-input"
                            name="stay-input"
                            id="stay-input"
                            onChange={(e) => console.log(e.value)}
                            selectionMode="range"
                            readOnlyInput
                            hideOnRangeSelection
                        />
                    </div>
                </div>
                <div className="col col-12 col-lg-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="adults">Adulti</label>
                        <select name="adults" id="adults">
                            <option value="">Adulti</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-lg-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="children">Bambini (3-17)</label>
                        <select name="children" id="children">
                            <option value="">Bambini</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-lg-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <label htmlFor="infant">Hai un neonato (0-2)?</label>
                        <select name="infant" id="infant">
                            <option value="false">No</option>
                            <option value="true">Si</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <button className="py-2 px-4 rounded rounded-2 check-availability-btn">CONTROLLA DISPONIBILITA'</button>
                </div>
            </form>
        </>
    );
};

export default BookingEngineForm;