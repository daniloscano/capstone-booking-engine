import {useParams} from "react-router-dom";
import {useEffect} from "react";
import useRoomDetailsStore from "../../stores/useRoomDetailsStore.js";
import {useRoomTypes} from "../../hooks/useRoomTypes.js";
import Loader from "../../loader/Loader.jsx";
import './roomDetails.css'

const RoomDetails = () => {
    const {roomId} = useParams()
    const {roomDetails, roomDetailsLoading, roomDetailsError} = useRoomDetailsStore()
    const {getRoomTypeById} = useRoomTypes()

    useEffect(() => {
        getRoomTypeById(roomId)
    }, []);

    if (roomDetailsLoading) {
        return <Loader />;
    }

    if (roomDetailsError) {
        return <p>Errore: {roomDetailsError.message ?? String(roomDetailsError)}</p>;
    }

    if (!roomDetails) {
        return;
    }

    const {name, description, dimensions, amenitiesIds, bedsId, images} = roomDetails

    return (
        <>
            <div className="container-fluid px-5 my-5">
                <div className="row">
                    <div className="col col-12 col-lg-5">
                        <img
                            className="img-fluid"
                            src={images[0]}
                            alt={name.toLowerCase().split(' ').join('-')}
                        />
                    </div>
                    <div className="col col-12-col-lg-7">
                        <h2 className="mb-4 room-details-title">{name}</h2>
                        <p className="fs-5 mb-4 room-details-subtitle"><b>Dimensioni:</b> {dimensions}</p>
                        <div className="d-flex align-items-between gap-5 mb-4">
                            {
                                bedsId.king > 0 && (
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            className="room-details-icon"
                                            src="/icons/king-bed.png"
                                            alt="king-bed"
                                        />
                                        <p className="m-0 p-0">X {bedsId.king}</p>
                                    </div>
                                )
                            }
                            {
                                bedsId.single > 0 && (
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            className="room-details-icon"
                                            src="/icons/single-bed.png"
                                            alt="single-bed"
                                        />
                                        <p className="m-0 p-0">X {bedsId.single}</p>
                                    </div>
                                )
                            }
                            {
                                bedsId.crib > 0 && (
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            className="room-details-icon"
                                            src="/icons/crib-bed.png"
                                            alt="crib-bed"
                                        />
                                        <p className="m-0 p-0">X {bedsId.crib}</p>
                                    </div>
                                )
                            }
                        </div>
                        <p className="mb-4 room-details-description">{description}</p>
                        <div className="d-flex align-items-center gap-5">
                            {
                                amenitiesIds.map((amenity, index) => (
                                    <div
                                        key={`room-amenity-${index}`}
                                        className="d-flex align-items-center gap-3 my-4"
                                    >
                                        <img
                                            className="img-fluid room-details-icon"
                                            src={amenity.icon}
                                            alt={amenity.code}
                                        />
                                        <p className="m-0 p-0">{amenity.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RoomDetails;