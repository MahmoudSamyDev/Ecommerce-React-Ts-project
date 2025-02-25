import Men from "../../assets/Landing/1.jpg";
import Women from "../../assets/Landing/4.jpg";
import Kids from "../../assets/Landing/1.jpg";


import SlideObj from './SlideObj';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../SwiperStyleSheets/styles.css';
import '../../SwiperStyleSheets/pagination.css';
import '../../SwiperStyleSheets/swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

function SliderAds() {
    return (
      <div className='rounded-[14px] overflow-hidden flex-1 min-h-[300px] max-h-[490px] h-[300px] md:h-[490px]'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideObj
              gender='MEN'
              img={<img src={Men} className='h-[100%] w-[100%] hidden' alt="Men Photo" />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideObj
              gender='WOMEN'
              img={<img src={Women} className='h-[100%] w-[100%] hidden' alt="Women Photo" />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideObj
              gender='kids'
              img={<img src={Kids} className='h-[100%] w-[100%] hidden' alt="Kid Photo" />}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}



export default SliderAds;