import './hero.css'

const Hero = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center gap-3 main-hero">
                <div
                    className="container d-flex flex-column justify-content-center align-items-center gap-4 py-5 main-hero-content"
                >
                    <h1 className="hero-title">Hotel Eden</h1>
                    <p className="hero-subtitle">Benvenuti nel nostro piccolo angolo di paradiso</p>
                    <button
                        className="rounded rounded-1 py-2 px-4 book-now-btn"
                    >
                        PRENOTA ORA
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;