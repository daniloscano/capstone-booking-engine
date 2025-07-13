import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import './imagewiper.css'

const ImagesSwiper = ({images}) => {
    return (
        <>
            <div className="images-swiper-wrapper">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={{delay: 5500, disableOnInteraction: false}}
                    loop={true}
                >
                    {
                        images.map(image => (
                            <SwiperSlide>
                                <img
                                    className="img-fluid image-slide"
                                    src={image}
                                    alt="swiper-image"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default ImagesSwiper;