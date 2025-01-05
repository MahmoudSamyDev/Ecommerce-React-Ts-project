import SlideObj from './SlideObj';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './swiper.css';
import './pagination.css';

import './styles.css';

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
              img={<img src="src/assets/Landing/1.jpg" className='h-[100%] w-[100%]' alt="Men Photo" />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideObj
              gender='WOMEN'
              img={<img src="src/assets/Landing/4.jpg" className='h-[100%] w-[100%]' alt="Women Photo" />}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideObj
              gender='kids'
              img={<img src="src/assets/Landing/1.jpg" className='h-[100%] w-[100%]' alt="Kid Photo" />}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}



export default SliderAds;