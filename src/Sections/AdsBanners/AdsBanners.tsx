import AdCard from '../Components/AdCard';
import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import banner1 from '../../assets/banners/banner1.jpg';
import banner2 from '../../assets/banners/banner2.jpg';

function AdsBanners() {
    return (
        <div className="main-header-container w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <AdCard imgSrc={banner1} title="NEW ARRIVALS" disc="SKI CLOTHES SALE" sale="Up to 35% Off" color='black'/>
                    <AdCard imgSrc={banner2} title="BEST SELLER" disc="TRENDING WOMEN" sale="Up to 35% Off" color='white'/>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default AdsBanners;
