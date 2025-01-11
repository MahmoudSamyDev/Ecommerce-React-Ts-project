import AdCard from './AdCard';
import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import Ad1 from '../../assets/AdsCards/Ad1.webp';
import Ad2 from '../../assets/AdsCards/Ad2.webp';
import Ad3 from '../../assets/AdsCards/Ad3.webp';

function AdsCards() {
    return (
        <div className="main-header-container w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <AdCard imgSrc={Ad1} title="NEW ARRIVALS" disc="SKI CLOTHES SALE" sale="Up to 35% Off" color='black'/>
                    <AdCard imgSrc={Ad2} title="BEST SELLER" disc="TRENDING WOMEN" sale="Up to 35% Off" color='white'/>
                    <AdCard imgSrc={Ad3} title="NEW ARRIVALS" disc="NEW LATEST BAG" sale="Up to 35% Off" color='black'/>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default AdsCards;
