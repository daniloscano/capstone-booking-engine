import Footer from "../../components/footer/Footer.jsx";

const WebsitePagesLayout = ({ children }) => {
    return (
        <>
            { children }
            <Footer />
        </>
    );
};

export default WebsitePagesLayout;