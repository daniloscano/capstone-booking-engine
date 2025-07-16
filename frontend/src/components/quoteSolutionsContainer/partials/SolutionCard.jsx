import ImagesSwiper from "../../imagesSwiper/ImagesSwiper.jsx";
import './solutionCard.css'

const SolutionCard = ({ solution }) => {
    const { _id: solutionId, roomTypeId: room, policies } = solution
    const { images, name, dimensions, description } = room

    const lowestPrice = policies.find(policy => policy.bookingPolicyId.code === 'nref')

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
                        <div className="d-flex justify-content-between align-items-center gap-4 mt-5">
                            <p className="p-0 m-0 solution-card-price">A partire da <b>€ ${Number(lowestPrice.price).toFixed(2)}</b></p>
                            <button className="rounded rounded-2 py-2 px-4 book-now-btn">SCOPRI</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SolutionCard;