import ProductImage from '../../../assets/ProductsSlides/Product-1.webp';

function ProductImageSection() {
    return(
        <section className='product-image w-full md:w-[47%]'>
                <div className='border border-[#c7c7c7] rounded-[14px] w-[90%] h-[80%] mx-auto'>
                    <img src={ProductImage} alt='Product' className='w-full h-full object-contain' />
                </div>
                <div className='product-images-group flex justify-between w-full lg:w-[60%] mx-auto mt-[15px]'>
                    <div className='border border-[#c7c7c7] rounded-[14px] w-[70px] h-[70px] mx-auto cursor-pointer bg-white hover:bg-[#d8d8d8] hover:border-[#f9b8b8] transition  ease-in-out duration-300'>
                        <img src={ProductImage} alt='Product' className='w-full h-full object-contain' />
                    </div>
                    <div className='border border-[#c7c7c7] rounded-[14px] w-[70px] h-[70px] mx-auto cursor-pointer bg-white hover:bg-[#d8d8d8] hover:border-[#f9b8b8] transition  ease-in-out duration-300'>
                        <img src={ProductImage} alt='Product' className='w-full h-full object-contain' />
                    </div>
                    <div className='border border-[#c7c7c7] rounded-[14px] w-[70px] h-[70px] mx-auto cursor-pointer bg-white hover:bg-[#d8d8d8] hover:border-[#f9b8b8] transition  ease-in-out duration-300'>
                        <img src={ProductImage} alt='Product' className='w-full h-full object-contain' />
                    </div>
                </div>
        </section>
    );
}

export default ProductImageSection;