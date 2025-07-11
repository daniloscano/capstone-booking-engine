import useRoomsStore from "../../stores/useRoomsStore.js";
import {useRoomTypes} from "../../hooks/useRoomTypes.js";
import {useEffect} from "react";
import Loader from "../../loader/Loader.jsx";

const RoomsContainer = () => {
    const { rooms, loading, error } = useRoomsStore()
    const { getRoomTypes } = useRoomTypes()

    useEffect(() => {
        getRoomTypes()
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        loading && !error && <Loader />
                    }
                    {
                        !loading && !error && rooms.map((room, index) => (
                            <div key={`rooms-${index}`} className="col col-12 col-md-4 col-lg-3">
                                <p>{room.category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default RoomsContainer;