import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../layout/Components/ProductCard';
import { ProductsSlides } from '../../utilities/data';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// Import Swiper styles
import '../../SwiperStyleSheets/styles.css';
import '../../SwiperStyleSheets/pagination.css';
import '../../SwiperStyleSheets/swiper.css';
import 'swiper/swiper-bundle.css';


// Import necessary modules from Swiper
import { Pagination, Navigation } from 'swiper/modules';

function ProductsSlider({slides, id} : {slides: number, id: string}) {
    const swiperRef = useRef(null);

    return (
        <div className='w-full bg-background my-[20px] relative'>
            <Swiper
                ref={swiperRef}
                slidesPerView={slides}
                spaceBetween={30}
                navigation={{ nextEl: `.custom-next-${id}`, prevEl: `.custom-prev-${id}` }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1280px
                    1280: {
                        slidesPerView: Number(slides),
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    ProductsSlides?.map((product) => (
                        <SwiperSlide key={product.id} style={{borderRadius: '14px'}}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className={`custom-prev custom-prev-${id} absolute top-[50%] translate-y-[-50%] z-10 left-[10px] bg-[#002c3d] text-white p-[5px] rotate-180 rounded-[10px]`}>
                <DoubleArrowIcon />
            </button>
            <button className={`custom-next custom-next-${id} absolute top-[50%] translate-y-[-50%] z-10 right-[10px] bg-[#002c3d] text-white p-[5px] rounded-[10px]`}>
                <DoubleArrowIcon />
            </button>
        </div>
    )
}

export default ProductsSlider;
