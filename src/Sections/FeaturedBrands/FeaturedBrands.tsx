import ContainerWrapper from '../../layout/Components/ContainerWrapper';


import Alibaba from '../../assets/Brands/alibaba.webp';
import Levis from '../../assets/Brands/levis.webp';
import Lotto from '../../assets/Brands/lotto.webp';
import Raymond from '../../assets/Brands/raymond.webp';
import Samsung from '../../assets/Brands/samsung.webp';


function FeaturedBrands() {
    return (
        <div className="main-header-container w-full content-center py-[15px]">
            <ContainerWrapper>
            <div className='text-left text-[20px] mb-[20px]'>Featured Brands</div>
                <div className='w-full bg-white rounded-[14px] overflow-hidden'>
                    <div className='w-[90%] mx-auto flex justify-between items-center py-[20px]'>
                        <img src={Alibaba} alt="alibaba" className='w-[100px] h-[100px] object-contain grayscale'/>
                        <img src={Levis} alt='levis' className='w-[100px] h-[100px] object-contain grayscale'/>
                        <img src={Lotto} alt='lotto' className='w-[100px] h-[100px] object-contain grayscale'/>
                        <img src={Raymond} alt='raymond' className='w-[100px] h-[100px] object-contain grayscale'/>
                        <img src={Samsung} alt='samsung' className='w-[100px] h-[100px] object-contain grayscale'/>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default FeaturedBrands;