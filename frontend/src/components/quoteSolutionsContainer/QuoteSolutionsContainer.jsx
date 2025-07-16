import useQuoteRequestStore from "../../stores/useQuoteRequestStore.js";
import {useEffect} from "react";
import SolutionCard from "./partials/SolutionCard.jsx";
import Loader from "../../loader/Loader.jsx";

const QuoteSolutionsContainer = () => {
    const {quoteRequest, quoteRequestLoading, quoteRequestError, reset} = useQuoteRequestStore()
    console.log(quoteRequest)
    const {filteredSolutions, setFilteredSolutions} = useQuoteRequestStore()

    useEffect(() => {
        const solutions = quoteRequest?.quoteSolutionsIds || []

        if (quoteRequest && solutions.length > 0) {
            const filteredQuoteSolutions = solutions.filter(solution => solution.bookingPolicyId.code === 'nref')
            setFilteredSolutions(filteredQuoteSolutions)
        }
    }, [quoteRequest]);

    useEffect(() => {
        return () => reset();
    }, [reset]);

    return (
        <>
            <section className="container my-4 px-0 quote-solutions-container">
                {
                    quoteRequestLoading && <Loader />
                }
                {
                    !quoteRequestLoading && filteredSolutions.map((solution, index) => (
                        <SolutionCard key={`solution-card-${index}`} solution={solution} />
                    ))
                }
            </section>
        </>
    );
};

export default QuoteSolutionsContainer;




