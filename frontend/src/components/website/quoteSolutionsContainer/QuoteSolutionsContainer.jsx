import useQuoteRequestStore from "../../../stores/website/useQuoteRequestStore.js";
import {useEffect} from "react";
import SolutionCard from "./partials/SolutionCard.jsx";
import Loader from "../../../loader/Loader.jsx";

const QuoteSolutionsContainer = () => {
    const {quoteRequest, quoteRequestSolutions, quoteRequestLoading, quoteRequestError, setQuoteRequestSolutions, reset} = useQuoteRequestStore()

    useEffect(() => {
        if (quoteRequest && quoteRequest.quoteSolutionsIds) {
            setQuoteRequestSolutions(quoteRequest.quoteSolutionsIds)
        }
    }, [quoteRequest]);
    /*
    useEffect(() => {
        return () => reset();
    }, [reset]);
    */
    return (
        <>
            <section className="container mt-4 mb-5 px-0 quote-solutions-container">
                {
                    quoteRequestLoading && <Loader/>
                }
                {
                    !quoteRequestLoading && quoteRequestSolutions.length > 0 && quoteRequestSolutions.map((solution, index) => (
                        <SolutionCard key={`solution-card-${index}`} solution={solution}/>
                    ))
                }
            </section>
        </>
    );
};

export default QuoteSolutionsContainer;




