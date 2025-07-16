import {useParams} from "react-router-dom";
import {useSolution} from "../../hooks/useSolution.js";
import {useEffect} from "react";
import useSolutionStore from "../../stores/useSolutionStore.js";
import Loader from "../../loader/Loader.jsx";
import ImagesSwiper from "../imagesSwiper/ImagesSwiper.jsx";
import './solutionDetails.css'

const SolutionDetails = () => {
    const {solutionId} = useParams()
    const {solution, solutionLoading, solutionError, reset} = useSolutionStore()
    const {getSolutionById} = useSolution()

    useEffect(() => {
        getSolutionById(solutionId)

        return () => {
            reset()
        }
    }, [])

    if (!solution) return

    const {_id: id, roomTypeId: room, policies} = solution
    const {name, description, dimensions, amenitiesIds: amenities, bedsId: beds, images} = room

    return (
        <>
            <section className="container mt-4 mb-5 solution-details">
                {
                    !solution && solutionLoading && !solutionError && <Loader/>
                }
                {
                    !solutionLoading && solution && !solutionError && (
                        <>
                            <div className="row">
                                <div className="col col-12 col-md-5">
                                    <ImagesSwiper
                                        images={images}
                                        autoplay={true}
                                    />
                                </div>
                                <div className="col col-12 col-md-7">
                                    <h2 className="solution-details-title">{name}</h2>
                                    <p className="pb-2 solution-details-subtitle">{dimensions}</p>
                                    <div className="d-flex align-items-center gap-4 pb-3 solution-details-beds">
                                        {
                                            beds.king > 0 && (
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        className="room-beds-icon"
                                                        src="/icons/king-bed.png"
                                                        alt="king-bed"
                                                    />
                                                    <p className="m-0 p-0">X {beds.king}</p>
                                                </div>
                                            )
                                        }
                                        {
                                            beds.single > 0 && (
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        className="room-beds-icon"
                                                        src="/icons/single-bed.png"
                                                        alt="single-bed"
                                                    />
                                                    <p className="m-0 p-0">X {beds.single}</p>
                                                </div>
                                            )
                                        }
                                        {
                                            beds.crib > 0 && (
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        className="room-beds-icon"
                                                        src="/icons/crib-bed.png"
                                                        alt="crib-bed"
                                                    />
                                                    <p className="m-0 p-0">X {beds.crib}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className="solution-details-description">{description}</p>
                                </div>
                                <h4>Dotazioni</h4>
                                <div className="row gy-2 mb-4">
                                    {
                                        amenities.map((amenity, index) => (
                                            <div
                                                key={`room-amenity-${index}`}
                                                className="col col-12 col-md-4"
                                            >
                                                <div className="d-flex align-items-center gap-2">

                                                    <img
                                                        className="img-fluid room-details-icon"
                                                        src={amenity.icon}
                                                        alt={amenity.code}
                                                    />
                                                    <p className="m-0 p-0">{amenity.name}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                policies.map((policy, index) => (
                                    <div
                                        key={`solution-policy-${index}`}
                                        className="row align-items-center py-3 my-4 rounded rounded-2 solution-details-policy"
                                    >
                                        <div className="col col-12 col-md-3 ps-4">
                                            <h5>{policy.bookingPolicyId.name}</h5>
                                        </div>
                                        <div className="col col-12 col-md-7">
                                            <p className="p-0 my-1">{policy.bookingPolicyId.deposit}</p>
                                            <p className="p-0 my-1">{policy.bookingPolicyId.balance}</p>
                                            <small>{policy.bookingPolicyId.cancellation}</small>
                                        </div>
                                        <div className="col col-12 col-md-2 text-center">
                                            <p className="my-2 solution-details-price">
                                                <b>{`€ ${Number(policy.price).toFixed(2)}`}</b></p>
                                            <button className="py-2 px-4 rounded rounded-2 book-now-btn">PRENOTA</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </section>
        </>
    );
};

export default SolutionDetails;