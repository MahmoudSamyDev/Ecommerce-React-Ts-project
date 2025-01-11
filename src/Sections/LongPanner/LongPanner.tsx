import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import LongPannerImg from '../../assets/banners/long-banner.jpg';

function LongPanner() {
    return (
        <div className="main-header-container w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className='w-full relative h-[400px] lg:h-[130px] rounded-[14px] overflow-hidden'>
                    <img src={LongPannerImg} alt="long-panner" className='w-full h-full object-cover'/>
                    <div className='content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] mx-auto'>
                        <span className='block font-bold w-full text-[20px] sm:text-3xl md:text-4xl text-center'>
                            GIFT <span className='text-[red]'>50% OFF</span> PERFECT STYLES
                        </span>
                        <span className='block text-center text-[12px] sm:text-sm md:text-lg'>
                            Only until the end of this week. Terms and conditions apply
                        </span>
                        <div className='flex justify-center items-center mt-[20px] lg:hidden'>
                            <button className='block bg-white text-black py-[10px] px-[20px] rounded-[14px] duration-300 hover:bg-black hover:text-white shadow'>
                                Discover Now
                            </button>
                        </div>
                    </div>
                    <button className='block bg-white text-black absolute top-1/2 -translate-y-1/2 right-[20px] py-[10px] px-[20px] rounded-[14px] duration-300 hover:bg-black hover:text-white shadow hidden lg:block'>
                        Discover Now
                    </button>
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default LongPanner;