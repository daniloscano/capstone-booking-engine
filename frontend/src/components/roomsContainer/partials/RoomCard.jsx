import './roomCard.css'
import {Link} from "react-router-dom";

const RoomCard = ({room}) => {
    const {_id: roomId, images, name, dimensions, description, amenitiesIds} = room
    return (
        <>
            <Link
                className="text-decoration-none"
                to={`/rooms/${roomId}`}
            >
                <div className="d-flex flex-column gap-3 rounded rounded-3 room-card">
                    <div className="room-card-header">
                        <img
                            className="img-fluid room-card-image"
                            src={images[0]}
                            alt={name.toLowerCase().split(' ').join('-')}
                        />
                    </div>
                    <div className="p-3 pt-0 room-card-content">
                        <p className="fs-4 fw-bold m-0 p-0 room-card-title">{name}</p>
                        <p className="fs-6 m-0 room-card-subtitle">{dimensions}</p>
                        <div className="d-flex align-items-center gap-4 py-3">
                            {
                                amenitiesIds.map((amenity, index) => (
                                    <img
                                        key={`room-amenity-${index}`}
                                        className="room-card-amenity-image"
                                        src={amenity.icon}
                                        alt={amenity.name}
                                    />
                                ))
                            }
                        </div>
                        <p className="p-0 m-0 text-truncate-4 room-card-description">{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default RoomCard;