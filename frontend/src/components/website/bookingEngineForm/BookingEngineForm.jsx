import {Calendar} from "primereact/calendar";
import './bookingEngineForm.css'
import useBookingEngineFormStore from "../../../stores/website/useBookingEngineFormStore.js";
import {format} from "date-fns";
import {useCheckAvailability} from "../../../hooks/website/useCheckAvailability.js";

const BookingEngineForm = () => {
    const { dates, setDates, adults, setAdults, children, setChildren, infant, setInfant } = useBookingEngineFormStore()
    const { checkAvailability } = useCheckAvailability()

    const stayInputChange = (e) => {
        setDates(e.value)
    }

    const adultsChange = (e) => {
        setAdults(Number(e.target.value))
    }

    const childrenChange = (e) => {
        setChildren(Number(e.target.value))
    }

    const infantChange = (e) => {
        setInfant(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            checkIn: format(dates[0], 'yyyy-MM-dd'),
            checkOut: format(dates[1], 'yyyy-MM-dd'),
            adults: adults,
            children: children,
            hasInfant: infant
        }

        checkAvailability(payload)
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="row align-items-center py-4 px-2 booking-engine-form">
                <div className="col col-12 col-lg-3">
                    <div className="d-flex flex-column gap-1 input-container">
                        <Calendar
                            name="stay-input"
                            id="stay-input"
                            onChange={stayInputChange}
                            value={dates}
                            selectionMode="range"
                            placeholder="Periodo Soggiorno"
                            dateFormat="dd/mm/yy"
                            readOnlyInput
                            hideOnRangeSelection
                        />
                    </div>
                </div>
                <div className="col col-12 col-lg-2">
                    <div className="d-flex flex-column gap-1 input-container">
                        <select
                            className="py-1 px-2 booking-engine-form-input"
                            onChange={adultsChange}
                            value={adults}
                            name="adults"
                            id="adults"
                        >
                            <option value="0">Adulti</option>
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
                        <select
                            className="py-1 px-2 booking-engine-form-input"
                            onChange={childrenChange}
                            value={children}
                            name="children"
                            id="children"
                        >
                            <option value="0">Bambini (3-17 anni)</option>
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
                        <select
                            className="py-1 px-2 booking-engine-form-input"
                            onChange={infantChange}
                            value={infant}
                            name="infant"
                            id="infant"
                        >
                            <option value="false">Neonato (0-2 anni)</option>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <button
                        type="submit"
                        className="py-2 px-4 rounded rounded-2 check-availability-btn"
                    >
                        CONTROLLA DISPONIBILITA'
                    </button>
                </div>
            </form>
        </>
    );
};

export default BookingEngineForm;