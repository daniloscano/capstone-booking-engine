import './ancillaryItem.css'

const AncillaryItem = ({ancillary}) => {
    return (
        <>
            <div
                className="row align-items-center p-2 my-4 rounded rounded-2 ancillary-item"
            >
                <div className="col col-12 col-md-10">
                    <h4 className="p-0 my-1">{ancillary.name}</h4>
                    <p className="p-0 my-1">{ancillary.description}</p>
                    <p className="m-0 p-0">
                        <b>€ {Number(ancillary.price).toFixed(2)}</b>
                        {
                            (() => {
                                switch (ancillary.allocation) {
                                    case 'perNight':
                                        return ' - al giorno'
                                    case 'perOccupancy':
                                        return ' - a persona al giorno'
                                    default:
                                        return ' - prezzo fisso'
                                }
                            })()
                        }
                    </p>
                </div>
                <div className="col col-12 col-md-2">
                    <div className="d-flex flex-column align-items-center">
                        <button className="py-2 px-4 rounded rounded-2 book-now-btn">SCEGLI</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AncillaryItem;