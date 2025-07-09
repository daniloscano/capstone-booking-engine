import Navigation from "../../components/navigation/Navigation.jsx";

const WebsiteBaseLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            { children }

        </>
    );
};

export default WebsiteBaseLayout;