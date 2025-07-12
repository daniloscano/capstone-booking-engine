import {useParams} from "react-router-dom";
import {useEffect} from "react";
import useRoomDetailsStore from "../../stores/useRoomDetailsStore.js";
import {useRoomTypes} from "../../hooks/useRoomTypes.js";
import Loader from "../../loader/Loader.jsx";

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

    const {name, description, dimensions, bedsId, amenitiesIds, images} = roomDetails

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col col-12 col-lg-4">
                        <img
                            className="img-fluid"
                            src={images[0]}
                            alt={name.toLowerCase().split(' ').join('-')}
                        />
                    </div>
                    <div className="col col-12-col-lg-8">
                        <h2 className="room-details-title">{name}</h2>

                        <p className="room-details-dimensions"><b>Dimensioni:</b> {dimensions}</p>
                        <p className="room-details-description">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomDetails;