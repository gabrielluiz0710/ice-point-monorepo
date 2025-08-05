import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ settings, children }) => {
    return (
        <div className="content">
            <Swiper modules={[Navigation, Pagination, A11y]}{...settings}>
            {children}
            </Swiper>
        </div>
    );
};

export default Slider;
