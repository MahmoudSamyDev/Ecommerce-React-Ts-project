import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../layout/Components/ProductCard';
import { ProductsSlides } from '../../utilities/data';

// Import Swiper styles
import '../../SwiperStyleSheets/styles.css';
import '../../SwiperStyleSheets/pagination.css';
import '../../SwiperStyleSheets/swiper.css';
import { Pagination } from 'swiper/modules';


function ProductsSlider() {
    return (
        <div className='w-full bg-background my-[20px]'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper bg-background"
            >
                {
                    ProductsSlides?.map((product) => (
                        <SwiperSlide key={product.id} style={{borderRadius: '14px'}}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>  
    );
}

export default ProductsSlider;