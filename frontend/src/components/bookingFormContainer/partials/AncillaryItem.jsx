import useQuoteRequestStore from "../../../stores/useQuoteRequestStore.js";
import useBookingFormStore from "../../../stores/useBookingFormStore.js";
import {useEffect} from "react";
import './ancillaryItem.css'

const AncillaryItem = ({ancillary}) => {
    const {quoteRequest} = useQuoteRequestStore()
    const {adults, children, daysStay: nights} = quoteRequest
    const { setAncillariesIds, setAncillariesPrice } = useBookingFormStore()

    const addToSelectedAncillary = (e) => {
        setAncillariesIds(ancillary._id)

        let ancillaryPrice = 0;

        switch (ancillary.allocation) {
            case 'perNight':
                ancillaryPrice = ancillary.price * nights;
                break;
            case 'perOccupancy':
                ancillaryPrice = ancillary.price * (adults + children) * nights;
                break;
            default:
                ancillaryPrice = ancillary.price;
        }

        setAncillariesPrice(ancillaryPrice)

        e.target.innerText = 'AGGIUNTO'
    }

    return (
        <>
            <div
                className="row align-items-center p-2 my-4 rounded rounded-2 ancillary-item"
            >
                <div className="col col-12 col-md-10">
                    <h4 className="p-0 my-1">{ancillary.name}</h4>
                    <p className="p-0 my-1">{ancillary.description}</p>
                    <p className="m-0 p-0 ancillary-item-price">
                        {
                            (() => {
                                switch (ancillary.allocation) {
                                    case 'perNight':
                                        return <b>€ {Number(ancillary.price * nights).toFixed(2)}</b>
                                    case 'perOccupancy':
                                        return <b>€ {Number(ancillary.price * (adults + children) * nights).toFixed(2)}</b>
                                    default:
                                        return <b>€ {Number(ancillary.price).toFixed(2)}</b>
                                }
                            })()
                        }
                    </p>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column align-items-center">
                        <button
                            onClick={addToSelectedAncillary}
                            className="py-2 px-4 rounded rounded-2 book-now-btn"
                        >
                            SCEGLI
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AncillaryItem;