import './serviceSection.css'

const ServiceSection = ({ imagePosition, service }) => {
    return (
        <>
            <section className="container-fluid p-0 my-4 services-section">
                <div className="row align-items-center service-content">
                    <div className={`col col-12 col-md-6 col-xl-8 p-0 order-last ${imagePosition === 'left' ? 'order-md-first' : 'order-md-last'}`}>
                        <img
                            className="img-fluid service-image"
                            src={service.image}
                            alt={service.alt}
                        />
                    </div>
                    <div
                        className={`col col-12 col-md-6 col-xl-4 order-first ${imagePosition === 'left' ? 'order-md-last' : 'order-md-first'}`}
                    >
                        <div
                            className="d-flex flex-column justify-content-center gap-2 py-3 px-5 service-info"
                        >
                            <h3 className="m-0 p-0 service-info-title">{service.title}</h3>
                            <p className="m-0 p-0 service-info-subtitle">{service.subtitle}</p>
                            <p className="mt-2 pt-3 service-info-description">{service.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;