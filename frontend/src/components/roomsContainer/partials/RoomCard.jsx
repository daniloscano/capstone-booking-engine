import './roomCard.css'

const RoomCard = ({room}) => {
    const {images, name, dimensions, description, amenitiesIds} = room
    return (
        <>
            <div className="d-flex flex-column gap-3 rounded rounded-3 room-card">
                <div className="card-header">
                    <img
                        className="img-fluid"
                        src="/rooms-section.png"
                        alt={name.toLowerCase().split(' ').join('-')}
                    />
                </div>
                <div className="p-3 pt-0 card-content">
                    <p className="fs-4 fw-bold m-0 p-0 card-title">{name}</p>
                    <p className="fs-6 m-0 card-subtitle">{dimensions}</p>
                    <div className="d-flex align-items-center gap-3 py-3">
                        {
                            amenitiesIds.map((amenity, index) => (
                                <img
                                    key={`room-amenity-${index}`}
                                    src={amenity.icon}
                                    alt={amenity.name}
                                />
                            ))
                        }
                    </div>
                    <p className="p-0 m-0 card-description">{description}</p>
                </div>
            </div>
        </>
    );
};

export default RoomCard;