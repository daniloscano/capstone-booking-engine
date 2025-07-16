import ImagesSwiper from "../../imagesSwiper/ImagesSwiper.jsx";
import './solutionCard.css'

const SolutionCard = ({ solution }) => {
    const { roomTypeId: room, price } = solution
    const { images, name, dimensions, description } = room


    return (
        <>
            <div className="rounded rounded-2 p-4 my-4 solution-card">
                <div className="row gy-4 align-items-center">
                    <div className="col col-12 col-md-5">
                        <ImagesSwiper
                            images={images}
                            autoplay={false}
                        />
                    </div>
                    <div className="col col-12 col-md-7">
                        <h2>{name}</h2>
                        <h6 className="pb-3">{dimensions}</h6>
                        <p className="pb-4 solution-card-description text-truncate-4">{description}</p>
                        <div className="d-flex justify-content-end align-items-center gap-3 mt-5">
                            <p className="p-0 m-0 solution-card-price">A partire da <b>€ ${Number(price).toFixed(2)}</b></p>
                            <button className="rounded rounded-2 py-2 px-4 book-now-btn">SCOPRI</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SolutionCard;