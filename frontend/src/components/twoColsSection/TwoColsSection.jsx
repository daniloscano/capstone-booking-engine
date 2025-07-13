import './twoColsSection.css'

const TwoColsSection = ({imagePosition, section}) => {
    return (
        <>
            <section className="container-fluid p-0 mt-4 two-cols-section">
                <div className="row align-items-center section-content">
                    <div className={`col col-8 p-0 ${imagePosition === 'left' ? 'order-first' : 'order-last'}`}>
                        <img
                            className="img-fluid section-image"
                            src={section.image}
                            alt={section.alt}
                        />
                    </div>
                    <div
                        className={`col col-4 ${imagePosition === 'left' ? 'order-last' : 'order-first'} content-col`}
                    >
                        <div
                            className="d-flex flex-column justify-content-center align-items-center gap-4 py-3 px-5 section-info"
                        >
                            <h3 className="section-info-title">{section.title}</h3>
                            <p className="px-5 section-info-subtitle">{section.description}</p>
                            {
                                section.href && (
                                    <button
                                        className="rounded rounded-2 py-2 px-4 section-btn"
                                    >
                                        <a
                                            className="text-decoration-none"
                                            href={section.href}
                                        >
                                            {section.title}
                                        </a>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TwoColsSection;