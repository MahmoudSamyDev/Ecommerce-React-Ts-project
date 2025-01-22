function SlideObj({ gender, img }: { gender: string, img: React.ReactNode }) {
    return (
        <div className='relative w-full min-h-[100%] max-h-[fit-content] h-[100%]'>
            <div className='image w-full h-full hidden md:block'>
                {img}
            </div>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] md:translate-x-[0%] md:left-[10%] text-center md:text-left w-full'>
                <div className='leading-[50px]'>
                    <span className='block text-[20px] md:text-[30px]'>LIFE STYLE COLLECTION</span>
                    <span className='block text-[60px] md:text-[80px] font-bold my-[12px]'>{gender}</span>
                    <span className='block text-[20px] md:text-[30px]'>SALE UP TO <span className='text-[#f4209a]'>30% OFF</span></span>
                    <span className='block text-[10px] md:text-[15px] text-[grey]'>Get Free Shipping On Orders over $99.00</span>
                </div>
                <span
                    className='block bg-black text-white mx-auto md:ml-0 text-lg sm:text-sm px-[20px] py-[10px] rounded-[10px] w-[fit-content] cursor-pointer transition ease-linear duration-50 hover:bg-[#343434]'
                >
                    Shop Now
                </span>
            </div>
        </div>
    );
}

export default SlideObj;