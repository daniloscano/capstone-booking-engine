import {useParams} from "react-router-dom";
import {useSolution} from "../../hooks/useSolution.js";
import {useEffect} from "react";
import useSolutionStore from "../../stores/useSolutionStore.js";
import Loader from "../../loader/Loader.jsx";

const SolutionDetails = () => {
    const {solutionId} = useParams()
    const {solution, solutionLoading, solutionError} = useSolutionStore()
    const {getSolutionById} = useSolution()

    useEffect(() => {
        getSolutionById(solutionId)
    }, [])


    return (
        <>
            <section className="container my-4 solution-details">
                {
                    !solution && solutionLoading && !solutionError && <Loader/>
                }
                {
                    !solutionLoading && solution && !solutionError && (
                        <h2>{solution.roomTypeId.name}</h2>
                    )
                }
            </section>
        </>
    );
};

export default SolutionDetails;