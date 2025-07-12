import useRoomsStore from "../../stores/useRoomsStore.js";
import {useRoomTypes} from "../../hooks/useRoomTypes.js";
import {useEffect} from "react";
import Loader from "../../loader/Loader.jsx";
import RoomCard from "./partials/RoomCard.jsx";

const RoomsContainer = () => {
    const { rooms, loading, error } = useRoomsStore()
    const { getRoomTypes } = useRoomTypes()

    useEffect(() => {
        getRoomTypes()
    }, []);

    return (
        <>
            <div className="container my-4">
                <h2 className="fw-bold py-3 my-4">Le Camere</h2>
                <div className="row gy-4">
                    {
                        loading && rooms.length === 0 && !error && <Loader />
                    }
                    {
                        !loading && !error && rooms.map((room, index) => (
                            <div key={`rooms-${index}`} className="col col-12 col-md-6 col-lg-4">
                                <RoomCard
                                    room={room}
                                />
                            </div>
                        ))
                    }
                    {
                        !loading && rooms.length === 0 && error && <div>Error...</div>
                    }
                </div>
            </div>
        </>
    );
};

export default RoomsContainer;