import {Galleria} from 'primereact/galleria';
import './imagesCarousel.css'

const ImagesCarousel = ({images}) => {
    const itemTemplate = (item) => {
        return <img
            className="img-fluid"
            src={item}
            alt="carousel-image"
        />;
    }

    return (
        <>
            <Galleria
                value={images}
                item={itemTemplate}
                circular
                autoPlay
                transitionInterval={4500}
            />
        </>
    );
};

export default ImagesCarousel;