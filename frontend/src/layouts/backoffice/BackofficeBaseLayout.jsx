import Navigation from "../../components/backoffice/navigation/Navigation.jsx";

const BackofficeBaseLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            { children }
        </>
    );
};

export default BackofficeBaseLayout;