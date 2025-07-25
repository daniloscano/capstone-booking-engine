import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import SolutionDetails from "../../components/website/solutionDetails/SolutionDetails.jsx";

const QuoteSolutionDetailsPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <div className="d-flex flex-column page-wrapper">
                    <main>
                        <SolutionDetails/>
                    </main>
                </div>
            </WebsiteBaseLayout>
        </>
    );
};

export default QuoteSolutionDetailsPage;